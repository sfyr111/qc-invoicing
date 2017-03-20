<template>
	<div class="store_input_grid">
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
        label="入库单号"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="入库类型"
        align="center">
        <template scope="scope">
          <span class="overfl-oneline" style="margin-left: 10px" :title="scope.row.productName">
          	{{ scope.row.name }}
         	</span>
        </template>
      </el-table-column>

      <el-table-column
        label="入库仓库"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px" class="overfl-oneline" :title="scope.row.category">
          	{{ scope.row.name }}
          </span>
        </template>
      </el-table-column>

      <el-table-column
        label="建单时间"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

			<el-table-column
		     fixed="right"
		     label="操作"
		     width="120">
		     <template scope="scope">
		       <el-button
		       	 @click="viewDetails"
		         type="text"
		         size="small">
		         查看详情
		       </el-button>
		     </template>
		   </el-table-column>      
    </el-table>
	</div>
</template>

<style lang="less">
.store_input_grid {
	.cell{
		text-align: center;
	}
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
		viewDetails () {
			this.$emit('view-details')
		}
	}
}
</script>