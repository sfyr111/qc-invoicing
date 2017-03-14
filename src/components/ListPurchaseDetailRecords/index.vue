<template>
	<div class="list_purchase_detail_records list_purchase_detail_head">
		<h1>
			入库记录
		</h1>

		<div>
			    <el-table
			      :data="record"
			      border
			      style="width: 100%"
			      fit>
						
			      <el-table-column
			        label="入库日期"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.inStorageDate }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="入库单号"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.inStorageCode }}</span>
			        </template>
			      </el-table-column>

			      <el-table-column
			        label="入库备注"
			        align="center">
			        <template scope="scope">
			          <span style="margin-left: 10px">{{ scope.row.remarks }}</span>
			        </template>
			      </el-table-column>
			    </el-table>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    record: {
      type: Array,
      deault: []
    }
  },
  data () {
    return {}
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