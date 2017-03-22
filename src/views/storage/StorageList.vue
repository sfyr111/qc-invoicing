<template>
	<div class="store_list">
		<!-- 查询条件 -->
		<store-list-form
		ref="formCheck"
		:list-one="getCategoryListFirst"
		:list-two="getCategoryListSecond"
		:list-three="getCategoryListThird"
		@select-type="selectType"
		@on-check="onCheck"
		>
		</store-list-form>
		  
		<!-- tab -->
		<store-list-grid @view-details="viewDetails" :list="getStorageList"></store-list-grid>

		<!-- 分页 -->
		<el-pagination
		  layout="prev, pager, next"
		  :page-size="limit"
		  :current-page="currentPage"
		  @current-change="handleCurrentChange"
		  :total="totalLimits">
		</el-pagination>
	</div>
</template>

<script>
import { StoreListGrid, StoreListForm } from '../../components'
import configUrl from '../../data/configUrl'
import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
			totalLimits: 0,					//总条数
			currentPage: 1,   					// 当前页
			limit: 10,									//	每页条数
			categoryListUrl: configUrl.categoryList.dataUrl,		//	商品分类URL
			listUrl: configUrl.storageList.dataUrl 							//	库存列表
		}
	},

	created () {
		//	查询一级分类
		this.productLevelList(0, 'first')

		this.$nextTick(function () {
			//	初始化库存列表
			let opt = this.$refs.formCheck.form
			this.onCheck(opt)
		})
		
	},

	components: {
		StoreListGrid,
		StoreListForm
	},

	methods: {
		// vuex
		...mapActions(['categoryList', 'storageList']),

		//	商品列表分类
		productLevelList (typeNum, type) {
			let self = this
			let opt = {
				type: 'get',
				url: this.categoryListUrl,
				queryType: type,
				data: {
					categoryNo: typeNum
				},
				success: function (res) {
					console.log(res)
				},
				fail: function () {
					self.$message.error('查询分类等级失败')
				}
			}

			this.categoryList(opt)
		},

		//	查看详情
		viewDetails (msg) {
			console.log(msg)
			this.$router.push({
				name: 'inventoryDetails'
			})
		},

		//	分页跳转
		handleCurrentChange(val) {
	    this.currentPage = val;
	    //console.log(`当前页: ${val}`);
	    let opt = this.$refs.formCheck.form
	    this.onCheck(opt)
    },

    //	选择商品分类
    selectType (msg) {
    	console.log(msg)

    	switch (msg.type) {
    		//	选择1级分类查询2级分类
    		case 'one':
    			this.productLevelList(msg.No_num, 'second')
    			break;

    		default:
    			this.productLevelList(msg.No_num, 'third')
    			break;
    	}
    },


    //	查询
    onCheck (msg) {
    	console.log(msg)
    	let self = this
    	let opt = {
    		type: 'get',
    		url: this.listUrl,
    		data: {
    			pageSize: this.limit,
    			pageNo: this.currentPage,
    			productId: msg.proNum,
    			productName: msg.proName,
    			skuCode: msg.proSKU,
    			productCode: msg.productCode,
    			brand: msg.brand,
    			status: msg.status,
    			firstCategoryId: msg.NO_one_type,
    			secondCategoryId: msg.NO_two_type,
    			thirdCategoryId: msg.NO_three_type,
    			quantityFrom: msg.invRangeStart,
    			quantityTo: msg.invRangeEnd
    		},
    		success: function (res) {
    			//console.log(res)
    			self.totalLimits = res.data.total
    		},
    		fail: function () {
    			self.$message.error('查询列表数据失败')
    		}
    	}
    	this.storageList(opt)
    }

	},

	computed: {
		...mapGetters(['getCategoryListFirst', 'getCategoryListSecond', 'getCategoryListThird', 'getStorageList'])
	}
}
</script>
