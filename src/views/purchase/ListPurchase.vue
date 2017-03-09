<template>
  <div>
    <!-- 采购列表查询 -->
    <list-purchase-form @add-purchase-order="addPurchaseOrder"></list-purchase-form>

    <!-- tab表格 -->
    <list-purchase-grid @view-detail="viewDetail"></list-purchase-grid>

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
import { ListPurchaseForm, ListPurchaseGrid } from '../../components'
export default {
	data () {
		return {
			totalLimits: 1000,					//总条数
			currentPage: 1,   					// 当前页
			limit: 10,									//	每页条数
		}
	},
	components: {
		ListPurchaseForm,
		ListPurchaseGrid
	},

	methods: {
		//	分页跳转
		handleCurrentChange(val) {
	    this.currentPage = val;
	    console.log(`当前页: ${val}`);
    },

    //	查看详情
    viewDetail (msg) {
    	//console.log(msg)
    	this.$router.push({
    		name: 'listPurchaseDetail'
    	})
    },

    //  新建采购单
    addPurchaseOrder () {
      this.$router.push({
        name: 'addPurchaseOrder'
      })
    }
	}
}
</script>
