<template>
	<div class="store_list_grid">
		<template>
		  <div>
		    <el-table
		      :data="tableData"
		      border
		      style="width: 100%"
		      fit>
					
					<el-table-column
						type="index"
						fixed
		        label="NO."
		        width="100"
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
		        label="品牌"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.name }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="库存数量"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.name }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="冻结数量"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.name }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="可销售库存"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.name }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="库存状态"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.name }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="操作"
		        align="center"
		        fixed="right"
		        width="220px">
		        <template scope="scope">
		          <!-- <el-button
		            size="small"
		            @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
		          <el-button
		            size="small"
		            @click="handleInfo(scope.$index, scope.row)">查看详情</el-button>
		          <!-- <el-button
		            size="small"
		            type="danger"
		            @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
		        </template>
		      </el-table-column>
		    </el-table>
		  </div>
		</template>
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    //	查看详情
    handleInfo(index, row) {
      console.log(index, row)
      let msg = {
      	index: index,
      	obj: row
      }
      this.$emit('view-details', msg)
    }
  }
}
</script>