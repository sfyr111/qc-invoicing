<template>
	<div class="list_purchase_detail_grid">
		<div class="store_list_grid">
			<template>
			  <div>
			    <el-table
			      :data="tableData"
			      border
			      style="width: 100%"
			      fit>

			      <el-table-column
			        label="商品编号"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.date }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="供应商编码"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="商品名称"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="规格型号"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="单位"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="采购单价"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="不含税价格"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="税率"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="退货数量"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="总金额"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="已交付数量"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="未交付数量"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
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