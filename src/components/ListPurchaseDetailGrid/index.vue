<template>
	<div class="list_purchase_detail_grid">
		<div class="store_list_grid">
		  <div>
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
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.productId }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品名称"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span class="overfl-oneline" style="margin-left: 10px" :title="scope.row.productName">
		          	{{ scope.row.productName }}
		         	</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品分类"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px" class="overfl-oneline" :title="scope.row.category">
		          	{{ scope.row.category }}
		          </span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品版本"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.productVersion }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品SKU"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.skuCode }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="商品69码"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.productCode }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="单位"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.unitCn }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="采购单价(含税)"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.priceWithTax }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="采购税率"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.taxRate }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="单价不含税"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.priceNoTax }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="采购数量"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.quantity }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="小计金额(含税)"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.totalWithTax }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="小计金额(不含税)"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.totalNoTax }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="已入库数量"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.inQuantity }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="未入库数量"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.notinQuantity }}</span>
		        </template>
		      </el-table-column>
		    </el-table>
		  </div>
		</div>
	</div>
</template>

<style lang="less">
.list_purchase_detail_grid{
	/* max-height: 442px;
	overflow-y: auto; */
	margin: 30px 0;
}
</style>

<script>
export default {
	props: {
		tableData: {
			type: Array,
			default: []
		}
	},
  data () {
    return {
    	tabH: 100,				//	表格高度
    }
  },
  mounted () {
  	this.$nextTick(function () {
  		let h = this.$el.querySelector('.el-table__body').offsetHeight + 55
  		//alert(h)
  		if (h >= 442) {
  			h = 442
  		} 
  		this.tabH  = h 
  	})
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