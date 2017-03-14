<template>
  <el-tabs v-model="activeName" @tab-click="tabClick">

    <el-tab-pane label="采购单" name="0">
    	<!-- 表格 -->
    	<review-purchase-grid></review-purchase-grid>

    	<!-- 分页 -->
    	<el-pagination
    	  layout="prev, pager, next"
    	  :page-size="limit"
    	  :current-page="proCurrentPage"
    	  @current-change="proCurrentChange"
    	  :total="proTotalLimits">
    	</el-pagination>
    </el-tab-pane>


    <el-tab-pane label="退货单" name="1">
    	<!-- 表格 -->
    	<review-purchase-grid></review-purchase-grid>

    		<!-- 分页 -->
    		<el-pagination
    		  layout="prev, pager, next"
    		  :page-size="limit"
    		  :current-page="outCurrentPage"
    		  @current-change="outCurrentChange"
    		  :total="outTotalLimits">
    		</el-pagination>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
	import {
		ReviewPurchaseGrid,
	} from '../../components'

  export default {
    data() {
      return {
        activeName: '0',
        limit: 10,			//	分页条数
        proCurrentPage: 1,		//	采购单当前页
        proTotalLimits: 1000,		//	采购单总条数
        outCurrentPage: 1,		//	退货单当前页
        outTotalLimits: 1000,		//	退货单总条数
      };
    },

    components: {
    	ReviewPurchaseGrid,
    },
    methods: {
    	//	选项卡切换
      tabClick (tab, e) {
        console.log(this.activeName)
      },

      //	商品明细点击页码
      proCurrentChange (pageIndex) {
      	console.log(pageIndex)
      },

      //	出库记录点击页码
      outCurrentChange (pageIndex) {
      	console.log(pageIndex)
      }
    }
  };
</script>