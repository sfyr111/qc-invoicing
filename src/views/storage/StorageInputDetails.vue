<template>
	<div class="storage_input_details">
		<!-- head -->
		<div class="storage_input_details_head">
	  <el-row :gutter="20">
	    <el-col :span="6">
	    	<div>入库单号：5456121</div>
	    </el-col>

	    <el-col :span="6">
	    	<div>建单时间：2016-01-01</div>
	    </el-col>

	    <el-col :span="6">
	    	<div>入库类型：采购入库</div>
	    </el-col>

			<el-col :span="6">
	    	<div>&nbsp;</div>
	    </el-col>
	  </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
      	<div>入库仓库：南山仓</div>
      </el-col>
    </el-row>
  	</div>

  	<!-- tab -->
  	<div class="storage_input_details_grid">
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
		        label="商品编码"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.date }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品名称"
		        align="center">
		        <template scope="scope">
		          <span class="overfl-oneline" style="margin-left: 10px" :title="scope.row.productName">
		          	{{ scope.row.name }}
		         	</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品分类"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px" class="overfl-oneline" :title="scope.row.category">
		          	{{ scope.row.name }}
		          </span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品版本"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.name }}</span>
		        </template>
		      </el-table-column>
				
				<el-table-column
				  label="商品SKU"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>

				<el-table-column
				  label="商品69码"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>

				<el-table-column
				  label="品牌"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>

				<el-table-column
				  label="采购数量"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>

				<el-table-column
				  label="入库数量"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>
					     
		    </el-table>
  	</div>
	</div>
</template>

<style lang="less">
.storage_input_details{
	.storage_input_details_head{
		padding: 10px 20px 20px 40px;
		font-size: 13px;
		.el-col div{
			line-height: 40px;
		}
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
}
</script>