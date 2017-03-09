<template>
	<div class="list_purchase_detail_records list_purchase_detail_head">
		<h1>
			入库记录
		</h1>

		<div>
			    <el-table
			      :data="tableData"
			      border
			      style="width: 100%"
			      fit>
						
			      <el-table-column
			        label="入库日期"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.date }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="入库单号"
			        width="180"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.name }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="入库备注"
			        width="180"
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