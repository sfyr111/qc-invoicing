<template>
	<div class="list_purchase_detail_grid">
		<div class="store_list_grid">
			<template>
			  <div>
			    <el-table
			      :data="tableData"
			      border
			      style="width: 100%"
			      >

			      <el-table-column
			        label="单号"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.date }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="审核状态"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="供应商"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="建单日期"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="订单有效期"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="交货日期"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="订单总金额"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

						<el-table-column
						  label="操作"
						  align="center"
						  width="220px">
						  <template scope="scope">
						    <el-button
						      size="small"
						      @click="handleInfo(scope.$index, scope.row)">查看详情</el-button>
						  </template>
						</el-table-column>
			    </el-table>
			  </div>
			</template>
		</div>
	</div>
</template>

<style lang="less">
.list_purchase_detail_grid{
	margin: 30px 0;
}
</style>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
}
</script>