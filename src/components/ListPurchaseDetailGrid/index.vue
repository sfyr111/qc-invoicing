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
							fixed
							type="index"
			        label="序号"
			        width="80"
			        align="center">
			      </el-table-column>

			      <el-table-column
			        label="商品编码"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
			        label="商品分类"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="商品版本"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="商品SKU"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="商品69码"
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
			        label="采购单价(含税)"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="采购税率"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="单价不含税"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="采购数量"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="小计金额(含税)"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="小计金额(不含税)"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="已入库数量"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="未入库数量"
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
  methods: {
    //	查看详情
    handleInfo(index, row) {
      console.log(index, row)
      let msg = {
      	index: index,
      	obj: row
      }
      this.$emit('view-detail', msg)
    }
  }
}
</script>