<template>
  <div class="storage_output">
    <!-- 查询条件 -->
    <div class="storage_output_head">
	    <el-form ref="form" :model="form" label-width="100px">
			  <el-row :gutter="20">
			    <el-col :span="6">
			    	<el-form-item label="出库单号：">
			    	    <el-input v-model="form.name"></el-input>
			    	</el-form-item>
			    </el-col>

			    <el-col :span="6">
			    	<el-form-item label="出库类型：">
			    	    <el-input v-model="form.name"></el-input>
			    	</el-form-item>
			    </el-col>

			    <el-col :span="6">
			    	<el-form-item label="出库仓库：">
				    	<el-select v-model="form.name" placeholder="">
		    	      <el-option label="区域一" value="shanghai"></el-option>
		    	      <el-option label="区域二" value="beijing"></el-option>
		    	    </el-select>
		    	  </el-form-item>
			    </el-col>

					<el-col :span="6">
			    	<div>&nbsp;</div>
			    </el-col>
			    
			  </el-row>

	  	  <el-row :gutter="20">
			    <el-col :span="6">
			    	<el-form-item label="建单日期：">
				    	<el-date-picker
		    	      v-model="value1"
		    	      type="datetime"
		    	      placeholder="选择日期时间">
		    	    </el-date-picker>
		    	  </el-form-item>
			    </el-col>

	  	    <el-col :span="6">
	      	  <div>&nbsp;</div>
	        </el-col>

	  			<el-col :span="6" class="btn_container">
	      	  <el-form-item label-width="20px">
	      	  	<el-button type="primary">查询</el-button>
	            <el-button type="info">新建出库单</el-button>
	          </el-form-item>
	        </el-col>
	  	  </el-row>
			</el-form>
		</div>

		<!-- tab -->
		<div>
		    <el-table
		      :data="tableData"
		      border
		      style="width: 100%"
		      max-height="445"
		    >
					
					<el-table-column
						type="index"
		        label="序号"
		        width="80"
		        align="center">
		      </el-table-column>

		      <el-table-column
		        label="出库单号"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.date }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="出库类型"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.date }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="出库仓库"
		        min-width="185"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.date }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="建单日期"
		        min-width="185"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.date }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="操作"
		        align="center"
		        width="220px">
		        <template scope="scope">
		          <el-button
		            size="small"
		            @click="viewDetails(scope.$index, scope.row)">查看详情</el-button>
		        </template>
		      </el-table-column>
		    </el-table>
		</div>
  </div>
</template>

<style lang="less">
.storage_output{
	.storage_output_head {
		.el-date-editor.el-input {
			width: 100%;
		}

		.btn_container{
			text-align: right;
		}
	}
}
</style>

<script>
export default {
	data () {
		return {
			form: {
				name: ''
			},
			value1: '',				//	建单日期
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
			this.$router.push({
				name: 'storageOutputDetails'
			})
		}
	}
}
</script>
