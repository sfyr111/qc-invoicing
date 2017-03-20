<template>
	<div class="list_purchase_detail padTop_40">
		<!-- title -->
		<pos-head title="采购详情"></pos-head>

		<!-- 采购列表 -->
		<list-purchase-detail-head v-if="getPurchaseOrderDetail.purchaseOrderDetailDTO" :obj="getPurchaseOrderDetail.purchaseOrderDetailDTO"></list-purchase-detail-head>

		<!-- tab -->
		<list-purchase-detail-grid :table-data="getPurchaseOrderDetailTab"></list-purchase-detail-grid>

		<!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page="pageNo" 
      @current-change="handleCurrentChange"
      :total="totalLimits">
    </el-pagination>

		<!-- 合计 -->
		<list-purchase-detail-total v-if="getPurchaseOrderDetail.purchaseOrderDetailDTO" :total-data="getPurchaseOrderDetail.purchaseOrderDetailDTO" :detail="getPurchaseOrderDetail"></list-purchase-detail-total>

		<!-- 相关约定 -->
		<list-purchase-detail-agree v-if="getPurchaseOrderDetail.purchaseOrderDetailDTO" :obj="getPurchaseOrderDetail.purchaseOrderDetailDTO"></list-purchase-detail-agree>

		<!-- 入库记录 -->
		<list-purchase-detail-records v-if="getPurchaseOrderDetail.storageRecords" :record="getPurchaseOrderDetail.storageRecords"></list-purchase-detail-records>

		<!-- 订单状态 -->
		<list-purchase-order-status v-if="getPurchaseOrderDetail.purchaseOrderDetailDTO" :obj="getPurchaseOrderDetail.purchaseOrderDetailDTO"></list-purchase-order-status>

		<!-- 按钮 请款 打印 -->
		<!-- <div class="btn">
			<el-button type="info">打印</el-button>
			<el-button type="warning" @click="showPleasePayBox">申请请款</el-button>
		</div> -->

		<!-- 请款弹窗 -->
		<el-dialog title="请款提示" v-model="isShowPleasePayBox">
		  <el-form :model="form">
		    <el-form-item label="请款金额" :label-width="formLabelWidth">
		      <el-input v-model="form.moneyNum" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="hidePleasePayBox">取 消</el-button>
		    <el-button type="primary" @click="pleasePayBoxConfirm">确 定</el-button>
		  </div>
		</el-dialog>
		
	</div>
</template>

<style lang="less">
.list_purchase_detail {
	.btn {
		text-align: center;
	}

	.el-dialog--small {
		width: 600px;

		.el-form-item {
			width: 400px;
			margin: 0 auto;
		}
	}
}
</style>

<script>
import {
	ListPurchaseDetailHead,
	ListPurchaseDetailGrid,
	ListPurchaseDetailTotal,
	ListPurchaseDetailAgree,
	ListPurchaseDetailRecords,
	ListPurchaseOrderStatus,
	PosHead
} from '../../components'
import { mapActions, mapGetters } from 'vuex'
import configUrl from '../../data/configUrl'

export default {
	data () {
		return {
			isShowPleasePayBox: false,			//	是否显示请款弹窗
			formLabelWidth: '80px',
			form: {
				moneyNum: ''
			},
			serialNumber: '',								//	采购单号
			pageNo: 1,											//	当前页
			pageSize: 10,										//	分页条数
			totalLimits: 0,									//	分页总条数
			isCanCheck: true,							//	分页限流
			detailUrl: configUrl.listPurchaseDetail.dataUrl,			//	详情URL
			detailListUrl: configUrl.purchaseOrderItemDetail.dataUrl,			//	详情URL
		}
	},
	components: {
		ListPurchaseDetailHead,
		ListPurchaseDetailGrid,
		ListPurchaseDetailTotal,
		ListPurchaseDetailAgree,
		ListPurchaseDetailRecords,
		ListPurchaseOrderStatus,
		PosHead
	},

	created () {
		let query = this.$route.query
		this.serialNumber = query.serialNumber

		//	初始化详情
		this.getDetail()

		//	初始化详情列表
		this.checkDetailList()
	},

	methods: {
		//	 vuex  actions
		...mapActions(['purchaseOrderDetail', 'purchaseOrderDetailTab']),

		//	请款弹窗
		showPleasePayBox () {
			this.isShowPleasePayBox = true
		},

		//	取消申请请款
		hidePleasePayBox () {
			this.isShowPleasePayBox = false
		},

		//	申请请款请款确定
		pleasePayBoxConfirm () {
			this.isShowPleasePayBox = false
			console.log(this.form.moneyNum)
		},

		//	获取详情
		getDetail () {
			let self = this
			let opt = {
				type: 'get',
				url: this.detailUrl,
				data: {
					serialNumber: this.serialNumber
				},
				success: function (res) {
					console.log(res)
				},
				fail: function (res) {
					self.$message.error('获取详情失败')
				}
			}

			this.purchaseOrderDetail(opt)
		},

		//	查询详情列表
		checkDetailList () {
			let self = this
			let opt = {
				type: 'get',
				url: this.detailListUrl,
				data: {
					serialNumber: this.serialNumber,
					pageNo: this.pageNo,
					pageSize: this.pageSize
				},
				success: function (res) {
					self.totalLimits = res.data.total
					console.log(self.totalLimits)
				},
				fail: function (res) {
					self.$message.error('获取详情列表失败')
				}
			}

			this.purchaseOrderDetailTab(opt)
		},

		//	分页点击
		handleCurrentChange (index) {
			this.pageNo = index
			this.checkDetailList()
		}
	},

	computed: {
		...mapGetters(['getPurchaseOrderDetail', 'getPurchaseOrderDetailTab'])
	}
}
</script>