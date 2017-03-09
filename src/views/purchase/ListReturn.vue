<template>
  <div>
    <!-- 退货查询 -->
    <list-purchase-return-form @add-return-order="addReturnOrder"></list-purchase-return-form>

    <!-- 退货表格tab -->
    <list-purchase-return-grid @view-detail="viewDetail"></list-purchase-return-grid>

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
import {
	ListPurchaseReturnForm,
	ListPurchaseReturnGrid
}
from '../../components'

export default {
	data () {
		return {
			totalLimits: 1000,					//总条数
			currentPage: 1,   					// 当前页
			limit: 10,									//	每页条数
		}
	},
	components: {
		ListPurchaseReturnForm,
		ListPurchaseReturnGrid
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
    		name: 'listReturnDetail'
    	})
    },

    //  新建退货单
    addReturnOrder () {
      this.$router.push({
        name: 'addReturnOrder'
      })
    }
	}
}
</script>
