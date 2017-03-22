<template>
	<div class="select_pro_frame">
		<!-- 查询 -->
		<el-form ref="form" :model="form" label-width="75px">
			<el-row>
			  <el-col :span="5">
			  	<el-form-item label="商品编号:">
			  	    <el-input v-model="form.productId"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="5">
			  	<el-form-item label="商品名称:">
			  	    <el-input v-model="form.productName"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="5">
			  	<el-form-item label="品牌:">
			  	    <el-input v-model="form.brand"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="5">
			  	<el-form-item label="SKU编码:">
			  	    <el-input v-model="form.skuCode"></el-input>
			  	</el-form-item>
			  </el-col>

			  <el-col :span="4">
			  	<el-button type="primary" @click="checkList">查询</el-button>
			  </el-col>
			  
			</el-row>
		</el-form>

		<!-- 分类与tab -->
		<el-row class="main">
			<!-- 商品分类 -->
		  <el-col :span="4" class="categories">
		  	<el-col :span="24"><div class="title">商品分类</div></el-col>
		  	<el-tree :data="treeList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		  </el-col>

		  <!-- tab 分页 -->
		  <el-col :span="20" class="tab">
		  	<!-- tab -->
		  	<el-table
		  			max-height="422"
		  	    :data="product.rows"
		  	    border
		  	    style="width: 100%"
		  	    @selection-change="handleSelectionChange">
		  	    <el-table-column
		  	      type="selection"
		  	      width="55">
		  	    </el-table-column>
		  	    <el-table-column
		  	      label="商品编码"
		  	    >
		  	      <template scope="scope">
		  	      	{{ scope.row.productId }}
		  	      </template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="商品名称"
		  	    >
		  	      <template scope="scope">
		  	      	<span class="overfl-oneline" :title="scope.row.productName">
		  	      		{{ scope.row.productName }}
		  	      	</span>
		  	      </template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="商品分类"
		  	    >
		  	      <template scope="scope">
		  	      	<span class="overfl-oneline" :title="scope.row.category">
		  	      		{{ scope.row.category }}
		  	      	</span>
		  	      </template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="商品版本"
		  	    >
		  	      <template scope="scope">
		  	      	<span class="overfl-oneline" :title="scope.row.productVersion">
		  	      		{{ scope.row.productVersion }}
		  	      	</span>
		  	      </template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="商品SKU"
		  	    >
		  	      <template scope="scope">{{ scope.row.skuCode }}</template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="税率"
		  	    >
		  	      <template scope="scope">{{ scope.row.taxRate }}</template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="含税价格"
		  	    >
		  	      <template scope="scope">{{ scope.row.price }}</template>
		  	    </el-table-column>

		  	    <el-table-column
		  	      label="不含税价格"
		  	    >
		  	      <template scope="scope">{{ scope.row.priceNoTax }}</template>
		  	    </el-table-column>
		  	</el-table>
	
				<!-- 分页 -->
				<el-pagination
				  layout="prev, pager, next"
				  :page-size="limit"
				  :current-page="currentPage"
				  @current-change="handleCurrentChange"
				  :total="product.total">
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
		min-width: 170px;
	}

	.el-form-item{
		margin-bottom: 10px;
	}

	.el-col-3 {
		text-align: right;
	}

	.el-col-4{
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
				margin-top: 7px;
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		//	商品分类菜单
		treeList: {
			type: Array,
			default: []
		},

		//	商品列表
		product: {
			type: Object,
			default: {}
		}
	},
	data () {
		return {
			form: {
				productId: '',				//	商品编号
				productName: '',			//	商品名称
				skuCode: '',					//	sku编码
				brand: ''						//	品牌
			},
			
      defaultProps: {
        children: 'childCategoryList',
        label: 'categoryName'
      },
      multipleSelection: [],
      limit: 10,					//	分页条数
      currentPage: 1				//	当前页
		}
	},

	methods: {
		//	商品分类
		handleNodeClick(data) {
	    this.$emit('menu-tree', data)
	  },

	  //	勾选商品 checkbox
	  handleSelectionChange(val) {
      this.multipleSelection = val
    },

    //	清空勾选商品
    clearSelectCheckbox () {
    	this.multipleSelection = []
    },

    //	获取选中的商品数组
    getSelectCheckboxArr () {
    	let arr = this.multipleSelection
    	return arr
    },

    //	分页点击页码
    handleCurrentChange (pageIndex) {
    	this.$emit('to-page', pageIndex)
    },

    //	查询
    checkList () {
    	this.$emit('check-list', this.form)
    }
	},
}
</script>