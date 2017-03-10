<template>
	<div class="select_pro_frame">
		<!-- 查询 -->
		<el-form ref="form" :model="form" label-width="75px">
			<el-row>
			  <el-col :span="7">
			  	<el-form-item label="商品编号:">
			  	    <el-input v-model="form.name"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="7">
			  	<el-form-item label="商品名称:">
			  	    <el-input v-model="form.name"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="7">
			  	<el-form-item label="品牌:">
			  	    <el-input v-model="form.name"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="3">
			  	<el-button type="primary">查询</el-button>
			  </el-col>
			  
			</el-row>
		</el-form>

		<!-- 分类与tab -->
		<el-row class="main">
			<!-- 商品分类 -->
		  <el-col :span="4" class="categories">
		  	<el-col :span="24"><div class="title">商品分类</div></el-col>
		  	<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		  </el-col>

		  <!-- tab 分页 -->
		  <el-col :span="20" class="tab">
		  	<!-- tab -->
		  	<el-table
		  	    :data="tableData3"
		  	    border
		  	    style="width: 100%"
		  	    @selection-change="handleSelectionChange">
		  	    <el-table-column
		  	      type="selection"
		  	      width="55">
		  	    </el-table-column>
		  	    <el-table-column
		  	      label="日期"
		  	      width="120">
		  	      <template scope="scope">{{ scope.row.date }}</template>
		  	    </el-table-column>
		  	    <el-table-column
		  	      prop="name"
		  	      label="姓名"
		  	      width="120">
		  	    </el-table-column>
		  	    <el-table-column
		  	      prop="address"
		  	      label="地址"
		  	      show-overflow-tooltip>
		  	    </el-table-column>
		  	</el-table>
	
				<!-- 分页 -->
				<el-pagination
				  layout="prev, pager, next"
				  :page-size="limit"
				  :current-page="currentPage"
				  @current-change="handleCurrentChange"
				  :total="totalLimits">
				</el-pagination>

		  </el-col>
		</el-row>
	</div>
</template>

<style lang="less">
.select_pro_frame {
	.el-input__inner {
		width: 75%;
		height: 30px;
	}

	.el-form-item{
		margin-bottom: 10px;
	}

	.el-col-3 {
		text-align: right;
	}

	.main{
		height: 400px;
		

		.categories{
			height: 100%;

			.title {
				background: #eef1f6;
				line-height: 40px;
				padding-left: 15px;
				color: #1f2d3d;
			}
			.el-tree {
				height: 100%;
				overflow-y: auto;
			}
		}

		.tab {
			padding: 10px;
			height: 442px;
			border: 1px solid #d1dbe5;
			border-left: none;

			.el-table td, .el-table th {
				height: 35px;
			}

			.el-pagination {
				margin-top: 20px;
			}
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

			data: [{
			          label: '一级 1',
			          children: [{
			            label: '二级 1-1',
			            children: [{
			              label: '三级 1-1-1'
			            }]
			          }]
			        },
			        {
			          label: '一级 2',
			          children: [{
			            label: '二级 2-1',
			            children: [{
			              label: '三级 2-1-1'
			            }]
			          }, {
			            label: '二级 2-2',
			            children: [{
			              label: '三级 2-2-1'
			            }]
			          }]
			        },
			        {
			          label: '一级 3',
			          children: [{
			            label: '二级 3-1',
			            children: [{
			              label: '三级 3-1-1'
			            }]
			          }, {
			            label: '二级 3-2',
			            children: [{
			              label: '三级 3-2-1'
			            }]
			          }]
			        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },

        tableData3: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-06',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }
             ],
      multipleSelection: [],
      limit: 10,					//	分页条数
      currentPage: 1,				//	当前页
      totalLimits: 1000,		//	总条数
		}
	},

	methods: {
		//	商品分类
		handleNodeClick(data) {
	    console.log(data);
	  },

	  //	全选
	  handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(`选择的数组${val}`)
    },

    //	分页点击页码
    handleCurrentChange (pageIndex) {
    	console.log(pageIndex)
    }
	}
}
</script>