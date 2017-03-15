<template>
	<div class="store_list_grid">
		<div>
		    <el-table
		      :data="list"
		      border
		      style="width: 100%"
		      fit>
					
					<el-table-column
						type="index"
						fixed
		        label="序号"
		        width="80"
		        align="center">
		      </el-table-column>

		      <el-table-column
		        label="采购单号"
		        width="180"
		        prop="serialNumber"
		        sortable
		        align="center">
		      </el-table-column>

		      <el-table-column
		        label="供应商"
		        width="180"
		        prop="supplierName"
		        sortable
		        align="center">
		      </el-table-column>

		      <el-table-column
		        label="建单日期"
		        min-width="185"
		        prop="createDate"
		        sortable
		        align="center">
		        <!-- <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
		        </template> -->
		      </el-table-column>

		      <el-table-column
		        label="交货日期"
		        prop="deliveryDate"
		        sortable
		        min-width="185"
		        align="center">
		        <!-- <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.deliveryDate }}</span>
		        </template> -->
		      </el-table-column>

		      <el-table-column
		        label="制单人"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.creator }}</span>
		        </template>
		      </el-table-column>

		      <!-- <el-table-column
		        label="付款方式"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.payMethod }}</span>
		        </template>
		      </el-table-column> -->

		      <!-- <el-table-column
		        label="付款约定"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.payAppoint }}</span>
		        </template>
		      </el-table-column> -->

		      <el-table-column
		        label="审核状态"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.flowStatus }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="付款状态"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.payStatus }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="订单总金额"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.totalPrice.toFixed(2) }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="请款金额"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.payrollRequisitionMoney }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="是否入库"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.inStatus }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="入库仓库"
		        width="180"
		        align="center">
		        <template scope="scope">
		          <span style="margin-left: 10px">{{ scope.row.warehouseName }}</span>
		        </template>
		      </el-table-column>

		      <el-table-column
		        label="操作"
		        align="center"
		        fixed="right"
		        width="220px">
		        <template scope="scope">
		          <el-button
		            size="small"
		            @click="handleInfo(scope.$index, scope.row)">查看详情</el-button>
		        </template>
		      </el-table-column>
		    </el-table>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: []
		}
	},
  data () {
    return {
     
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