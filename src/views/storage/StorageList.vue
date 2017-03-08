<template>
	<div class="store_list">
		<!-- 查询条件 -->
		<store-list-form></store-list-form>
		  
		<!-- 表单form -->
		<store-list-grid @view-detail="viewDetail"></store-list-grid>

		<!-- 分页 -->
		<el-pagination
		  layout="prev, pager, next"
		  :page-size="limit"
		  :current-page="currentPage"
		  @current-change="handleCurrentChange"
		  :total="totalLimits">
		</el-pagination>
	 <!--  <router-view></router-view> -->
	</div>
</template>

<script>
import { StoreListGrid, StoreListForm } from '../../components'

export default {
	data () {
		return {
			totalLimits: 1000,					//总条数
			currentPage: 1,   					// 当前页
			limit: 10,									//	每页条数
		}
	},
	components: {
		StoreListGrid,
		StoreListForm
	},
	methods: {
		viewDetail (msg) {
			console.log(msg)
			/*this.$router.push({
				name: 'invProDetail'
			})*/
		},

		//	分页跳转
		handleCurrentChange(val) {
	    this.currentPage = val;
	    console.log(`当前页: ${val}`);
    }

	}
}
</script>
