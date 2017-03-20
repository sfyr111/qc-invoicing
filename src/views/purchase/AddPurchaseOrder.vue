<template>
	<div class="add_purchase_order">
		<!-- 标题 -->
		<pos-head title="新建采购单"></pos-head>

		<!-- head -->
		<purchase-return-head ref="filterHead" :list="getSupplierList" @select-supplier="selectSupplier"></purchase-return-head>

		<!-- table -->
		<purchase-return-grid
		ref="tab"
		@select-pro="selectProduct"
		@remove-pro="removePro"
		:tab-list="tabData"
		:is-return="isReturn"
		:code="checkSelectProListParams.supplierCode"
		@input-pru-num="inputPruNum"
		@input-pru-quantity-blur="inputPurQuantityblur"
		></purchase-return-grid>

		<!-- 合计 -->
		<add-purchase-total :total="tabData" ref="total"></add-purchase-total>

		<!-- 确认订单填写信息 -->
		<add-purchase-write-msg ref="msg" :ware-house="getAddPurWarehouse"></add-purchase-write-msg>

		<!-- 确认制单按钮-->
		<div class="confirm_system">
			<el-button type="primary" size="large" @click="confirm">确认制单</el-button>
		</div>


		<!-- 选择商品 -->
		<el-dialog title="选择商品" v-model="isShowSelectProBox" size="large">
		  <select-pro-frame
		  	ref="selectProChild"
		  	:tree-list="getCategoryListTree"
		  	:product="getPurSelectProList"
		  	@check-list="confirmCheckSelectProList"
		  	@menu-tree="selectProTreeClick"
		  	@to-page="selectProToPage"
		  >
		  </select-pro-frame>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="isShowSelectProBox = false">取 消</el-button>
		    <el-button type="primary" @click="selectProConfirm">确 定</el-button>
		  </span>
		</el-dialog>

	</div>
</template>

<style lang="less">
.add_purchase_order {
	padding-top: 40px;
	.confirm_system {
		padding-top: 30px;
		text-align: center;
	}
	
	.el-dialog__body {
		padding: 15px;
	}

	.el-dialog--large{
		width: 70%;
		padding: 11px 10px;
	}

	.el-dialog__footer {
		padding: 40px 20px 12px;

		.el-button {
			min-width: 100px;
		}
	}
}
</style>

<script>
import {
	PurchaseReturnHead,
	PurchaseReturnGrid,
	AddPurchaseTotal,
	AddPurchaseWriteMsg,
	SelectProFrame,
	PosHead
} from '../../components'
import util from '../../utils/util'
import configUrl from '../../data/configUrl'
import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
			tabData: [],																				//	显示列表数据   选择完商品之后数据
			supplierListUrl: configUrl.supplierlist.dataUrl,			//	供货方URL
			supplierProCategoryTreeUrl: configUrl.supplierProCategoryTree.dataUrl,			//	选择商品 分类列表菜单URL
			purchaseSupplierProListUrl: configUrl.purchaseSupplierProList.dataUrl,		//  新增采购单  选择商品 商品列表URL
			warehouseSearchUrl: configUrl.warehouseSearch.dataUrl,				//	查询仓库URL
			purchaseAddUrl: configUrl.purchaseAdd.dataUrl,								//	新建采购单URL
			isShowSelectProBox: false,				//	是否显示选择商品弹窗
			isFirstShowSelectProBox: true,		//	是否是第一次显示选择商品弹窗
			isReturn: 0,											//	类型为采购
			checkSelectProListParams: {
				productId: '',				//	商品编号
				productName: '',			//	商品名称
				brand: '',							//	品牌
				supplierName: '',				//	供应商名称
				firstCategoryNo: '',		//  一级分类id
				secondCategoryNo: '',		//	二级分类id
				thirdCategoryNo: '',		//	三级分类id
				pageNo: 1,							//	页码
				pageSize: 10,						//	每页条数
				supplierCode: '',				//	供货方code	
			},
			isCanCheckSelectProList: true,		//	选择商品查询按钮请求节流
			isSubmitOrder: true,							//	确认制单节流
		}
	},
	components: {
		PurchaseReturnHead,
		PurchaseReturnGrid,
		AddPurchaseTotal,
		AddPurchaseWriteMsg,
		SelectProFrame,
		PosHead
	},

	created () {
		// 初始化供货方
		this.initSupplierList()

		//	初始化查询仓库
		this.initWarehouseSearch()
	},

	methods: {
		//	vuex actions
		...mapActions(['supplierList', 'categoryListTree', 'purSelectProList', 'addPurWarehouse', 'addPurchaseOrder']),

		//	查询供货方列表
		initSupplierList () {
			let self = this
			let opt = {
				type: 'get',
				url: this.supplierListUrl,
				data: {
					pageSize: 1000
				},
				success: function (res) {
					console.log(res)
				},
				fail: function (res) {
					self.$message.error('获取供货方列表失败')
				}
			}

			this.supplierList(opt)
		},

		//	确定  新建采购单
		confirm () {
			this.$nextTick(function () {
				//		表单验证
				//	供货方采购方信息填写
				if (!this.$refs.filterHead.checkSubmit()) {
					return
				}

				//	选择商品验证
				if (!this.tabData.length) {
					this.$message.error('请选择商品')
					return
				}

				//	交货期限，仓库等信息验证
				if (!this.$refs.msg.checkSubmit()) {
					return
				}

				//	子组件
				let filterHead = this.$refs.filterHead.form
				let writeMsg = this.$refs.msg.form
				let total = this.$refs.total
				let discountRate = 0						//	折扣率
				let discountPrice = 0						//	折扣金额

				//	判断输入 是折扣 还是折扣率
				//	输入折扣率
				if (total.isInputDiscount === 1) {
					discountPrice = 0
					discountRate = total.discount
				}
				else {
					discountPrice = total.discountMoney
					discountRate = 0
				}

				if (!isSubmitOrder) {
					return
				}

				this.isSubmitOrder = false

				let productList = []
				let self = this
				this.tabData.forEach(function (item) {
					let obj = {
						skuCode: item.skuCode,
						jdSkuCode: item.jdSkuCode,
						supplier: self.checkSelectProListParams.supplierCode,
						productName: item.productName,
						unit: item.unitCn,
						price: item.price,
						quantity: item.purQuantity,
						totalPrice: item.subtotalPrice
					}
					productList.push(obj)
				})
				
				let data = {
					principalMan: filterHead.principalMan,								//	采购方联系人
					//principalManTel: filterHead.principalManTel,					//	采购方联系电话
					supplierCode: this.checkSelectProListParams.supplierCode,			//	供应商编码
					supplierName: filterHead.supplierCompany.name,							//	供应商名称
					supplierMan: filterHead.supplierName,												//	供应商联系人
					supplierManTel: filterHead.supplierPhone,							//	供应商联系电话
					deliveryDate: util.getDateStr(writeMsg.deliveryDate),		//	交货期限
					warehouseId: writeMsg.wareHouse.id,											//	交货仓库id
					warehouseType: writeMsg.wareHouse.type,				//	仓库类型
					//payMethod: writeMsg.payMethod,													//	付款方式 1.网银转账
					//billType: writeMsg.billType,														//	发票类型 1.增值税专用发票 2.增值税普通发票
					validityDate: util.getDateStr(writeMsg.validityDate),										//	订单有效期
					remark: writeMsg.remark,																	//	其他约定
					discountRate: discountRate,								//	折扣率
					discountPrice: discountPrice,							//	折扣金额
					productList: productList									//	添加商品列表
				}

				let opt = {
					type: 'post',
					url: this.purchaseAddUrl,
					data: data,
					success: function (res) {
						self.$router.push({
							name: 'listPurchase'
						})
					},
					fail: function (res) {
						self.$message.error('制单失败')
						self.isSubmitOrder = true
					}
				}

				this.addPurchaseOrder(opt)
			})
		},

		//	选择商品弹窗
		selectProduct () {
			//console.log('选择商品')
			this.isShowSelectProBox = true

			//	初始化选择商品列表
			this.checkSelectProList()

			//	获取商品分类菜单列表
			let self = this
			let opt = {
				type: 'get',
				url: this.supplierProCategoryTreeUrl,
				data: {
					supplierCode: this.checkSelectProListParams.supplierCode
				},
				success: function (res) {
					console.log(res)
				},
				fail: function (res) {
					self.$message.error('获取商品分类列表失败')
				}
			}

			this.categoryListTree(opt)
		},

		//	选择商品 确定
		selectProConfirm () {
			this.isShowSelectProBox = false
			
			//	刷新采购展示tab
			//	如果为空则直接添加
			if (!this.tabData.length) {
				let arr = this.$refs.selectProChild.getSelectCheckboxArr()
				this.tabData = arr
				//	清空选中商品数组
				this.$refs.selectProChild.clearSelectCheckbox()
			}
			//	去重合并
			else {
				//	获取选中商品数组
				let arr = this.$refs.selectProChild.getSelectCheckboxArr()
				let newArr = util.getNewArr(this.tabData, arr, 'skuCode')
				this.tabData = this.tabData.concat(newArr)


				//	清空选中商品数组
				this.$refs.selectProChild.clearSelectCheckbox()
			}
			
		},

		//	删除商品
		removePro (msg) {
			let self = this
			let arr = []
			//	全选
			if (msg.selectAll) {
				this.tabData = []
				//this.$refs.tab.multipleSelection = []
			}
			else {
				this.tabData = util.getNewArr(msg.selectArr, this.tabData, 'skuCode')
				this.$refs.tab.multipleSelection = []
			}
		},

		//	选择供货商
		selectSupplier (msg) {
			this.checkSelectProListParams.supplierCode = msg.code
		},

		//	确定查询列表  选择商品
		confirmCheckSelectProList (msg) {
			this.checkSelectProListParams.pageNo = 1
			this.checkSelectProListParams.productId = msg.productId
			this.checkSelectProListParams.productName = msg.productName
			this.checkSelectProListParams.brand = msg.brand

			//	采购选择商品列表
			this.checkSelectProList()
		},

		//	查询选择商品列表 fun
		checkSelectProList () {
			/*if (!this.isCanCheckSelectProList) {
				return
			}*/

			//this.isCanCheckSelectProList = false

			let self = this
			let opt = {
				type: 'get',
				url: this.purchaseSupplierProListUrl,
				data: this.checkSelectProListParams,
				success: function (res) {
					//self.isCanCheckSelectProList = true
				},
				fail: function () {
					self.$message.error('获取选择商品列表失败')
					//self.isCanCheckSelectProList = true
				}
			}

			this.purSelectProList(opt)
		},

		//	选择商品 分类菜单选择
		selectProTreeClick (data) {
			let index = data.$treeNodeId
			
			switch (index) {
				case 1:
					this.checkSelectProListParams.firstCategoryNo = data.categoryNo
					this.checkSelectProListParams.secondCategoryNo = ''
					this.checkSelectProListParams.thirdCategoryNo = ''
					break;

				case 2:
					this.checkSelectProListParams.firstCategoryNo = ''
					this.checkSelectProListParams.secondCategoryNo = data.categoryNo
					this.checkSelectProListParams.thirdCategoryNo = ''
					break;

				default:
					this.checkSelectProListParams.firstCategoryNo = ''
					this.checkSelectProListParams.secondCategoryNo = ''
					this.checkSelectProListParams.thirdCategoryNo = data.categoryNo
					break;
			}

			//	查询选择商品列表
			this.checkSelectProList()
		},

		//	选择商品列表分页
		selectProToPage (index) {
			//console.log(index)
			this.checkSelectProListParams.pageNo = index

			//	采购选择商品列表
			this.checkSelectProList()
		},

		//	输入采购数量
		inputPruNum (msg) {
			let num = Number(msg.val)
			let index = msg.index

			//	计算价格
			this.computedPurMoneny(index, num)
		},

		//	输入采购数量失去焦点
		inputPurQuantityblur (msg) {
			let num = Number(msg.val)
			let index = msg.index

			//	计算价格
			this.computedPurMoneny(index, num)
		},

		//	采购数量重新计算价格
		computedPurMoneny (index, num) {
			let data = this.tabData[index]
			let price = Number(data.price)
			let priceNoTax = Number(data.priceNoTax)

			let obj = {
				subtotalPrice: price * num * 1000 / 1000,					//含税小计金额
				subtotalPriceNoTax: priceNoTax * num * 1000 / 1000,			//不含税小计金额
				purQuantity: num
			}

			this.tabData[index] = Object.assign(this.tabData[index], obj)
			this.$set(this.tabData, index, this.tabData[index])
		},

		//	查询仓库
		initWarehouseSearch () {
			let opt = {
				type: 'get',
				url: this.warehouseSearchUrl,
				data: {
					pageNo: 1,
					pageSize: 1000
				},
				success: function (res) {
					console.log(res)
				},
				fail: function (res) {
					console.log(res)
				}
			}

			this.addPurWarehouse(opt)
		},
	},

	computed: {
		...mapGetters(['getSupplierList', 'getCategoryListTree', 'getPurSelectProList', 'getAddPurWarehouse'])
	}
}
</script>