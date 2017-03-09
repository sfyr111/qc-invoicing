<template>
  <el-tabs v-model="activeName" @tab-click="tabClick">

    <el-tab-pane label="商品明细" name="0">
    	<!-- 表格 -->
    	<list-return-detail-grid></list-return-detail-grid>

    	<!-- 分页 -->
    	<el-pagination
    	  layout="prev, pager, next"
    	  :page-size="limit"
    	  :current-page="proCurrentPage"
    	  @current-change="proCurrentChange"
    	  :total="proTotalLimits">
    	</el-pagination>
    </el-tab-pane>


    <el-tab-pane label="出库记录" name="1">
    	<!-- 表格 -->
    	<list-return-out-record></list-return-out-record>

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
		listReturnDetailGrid,
		listReturnOutRecord
	} from '../../components'

  export default {
    data() {
      return {
        activeName: '0',
        limit: 10,			//	分页条数
        proCurrentPage: 1,		//	商品当前页
        proTotalLimits: 1000,		//	商品总条数
        outCurrentPage: 1,		//	出库记录当前页
        outTotalLimits: 1000,		//	出库记录总条数
      };
    },

    components: {
    	listReturnDetailGrid,
    	listReturnOutRecord
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