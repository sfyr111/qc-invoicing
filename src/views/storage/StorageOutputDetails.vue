<template>
	<div class="storage_output_details storage_input_details">
		<!-- head -->
		<div class="storage_input_details_head">
		  <el-row :gutter="20">
		    <el-col :span="6">
		    	<div>出库单号：5456121</div>
		    </el-col>

		    <el-col :span="6">
		    	<div>建单时间：2016-01-01</div>
		    </el-col>

		    <el-col :span="6">
		    	<div>出库类型：采购入库</div>
		    </el-col>

				<el-col :span="6">
		    	<div>&nbsp;</div>
		    </el-col>
		  </el-row>

	    <el-row :gutter="20">
	      <el-col :span="6">
	      	<div>出库仓库：南山仓</div>
	      </el-col>

	      <el-col :span="6">
	      	<div>订单编号：234567</div>
	      </el-col>
	    </el-row>
		</div>
		
		<!-- tab -->
		<div class="tab">
		
		    <el-table
		    	max-height="442"
		      :data="tableData"
		      border
		      style="width: 100%"
		      fit>
					
					<el-table-column
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
				  label="库存数量"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>

				<el-table-column
				  label="出库数量"
				  align="center">
				  <template scope="scope">
				    <span style="margin-left: 10px">{{ scope.row.name }}</span>
				  </template>
				</el-table-column>
					     
		    </el-table>
		</div>

		<!-- 收货信息 -->
		<div class="accpet_msg">
			  <el-row :gutter="20">
			    <el-col :span="6">
			    	<div>收货方/仓库:</div>
			    </el-col>

			    <el-col :span="6">
			    	<div>收货方联系人：</div>
			    </el-col>

			    <el-col :span="6">
			    	<div>联系电话：</div>
			    </el-col>

					<el-col :span="6">
			    	<div>&nbsp;</div>
			    </el-col>
			  </el-row>

			    <el-row :gutter="20">
			      <el-col :span="6">
			      	<div>备注：</div>
			      </el-col>

			      <el-col :span="6">
			      	
			      </el-col>

			      <el-col :span="6">
			      	
			      </el-col>

			  		<el-col :span="6">
			      	<div>&nbsp;</div>
			      </el-col>
			    </el-row>
		</div>
	</div>
</template>

<style lang="less">
.storage_output_details{
	.accpet_msg{
		line-height: 30px;
		margin: 30px 0;
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
	}
}
</script>