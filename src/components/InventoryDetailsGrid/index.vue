<template>
	<div class="inventory_details_grid">
		<div class="small_head">商品出入库明细</div>
	
		<div>
	    <el-table
	    	max-height="442"
	      :data="tableData"
	      border
	      style="width: 100%"
	      fit>
				
				<el-table-column
					fixed
					type="index"
	        label="序号"
	        width="80"
	        align="center">
	      </el-table-column>

	      <el-table-column
	        label="日期"
	        align="center">
	        <template scope="scope">
	          <span style="margin-left: 10px">{{ scope.row.date }}</span>
	        </template>
	      </el-table-column>

	      <el-table-column
	        label="出入库单号"
	        align="center">
	        <template scope="scope">
	          <span class="overfl-oneline" style="margin-left: 10px" :title="scope.row.productName">
	          	{{ scope.row.name }}
	         	</span>
	        </template>
	      </el-table-column>

	      <el-table-column
	        label="出入库类型"
	        align="center">
	        <template scope="scope">
	          <span style="margin-left: 10px" class="overfl-oneline" :title="scope.row.category">
	          	{{ scope.row.name }}
	          </span>
	        </template>
	      </el-table-column>

	      <el-table-column
	        label="入库商品数量"
	        align="center">
	        <template scope="scope">
	          <span style="margin-left: 10px">{{ scope.row.name }}</span>
	        </template>
	      </el-table-column>

	      <el-table-column
	        label="操作员"
	        align="center">
	        <template scope="scope">
	          <span style="margin-left: 10px">{{ scope.row.name }}</span>
	        </template>
	      </el-table-column>

	      <el-table-column
	        label="入库备注"
	        align="center">
	        <template scope="scope">
	          <span style="margin-left: 10px">{{ scope.row.name }}</span>
	        </template>
	      </el-table-column>
	    </el-table>
		</div>

	</div>
</template>

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
	}
}
</script>