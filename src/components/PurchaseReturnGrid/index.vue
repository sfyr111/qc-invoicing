<template>
	<div class="purchase_return_grid">
		<!-- 选择商品和删除 -->
		<div class="select_remmove_container">
			<span @click="selectPro">
				选择商品
			</span>

			<span v-if="multipleSelection.length" @click="removePro">删除</span>
		</div>

		<!-- 表格tab -->
    <el-table
      :data="list"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      >

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
			
			<el-table-column
				type="index"
				fixed
        label="序号"
        width="80"
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
        label="单位"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="采购单价(含税)"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="采购税率"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="单价不含税"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="采购数量"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="小计金额(含税)"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="小计金额(不含税)"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less">
.purchase_return_grid {
	.select_remmove_container {
		background: rgba(83, 97, 116, 0.5);
		font-size: 14px;

		span {
			display: inline-block;
			line-height: 40px;
			padding: 0 5px;
			cursor: pointer;
			color: #333;
			font-weight: bold;
		}
		span:first-child{
			margin: 0 10px;
		}
	}
}
</style>

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
			multipleSelection: []
		}
	},

	created () {
		console.log(this.list)
	},

	methods: {
		//	勾选商品
		handleSelectionChange(val) {
			//console.log(val)
      this.multipleSelection = val
    },

    //	选择商品
    selectPro () {
    	this.$emit('select-pro')
    },

    //	删除商品
    removePro () {
    	let msg = {}
    	//	全选
    	if (this.multipleSelection.length === this.list.length && this.multipleSelection.length) {
    		msg = {
    			selectAll: true,
    			selectArr: this.multipleSelection
    		}
    	}
    	else {
    		msg = {
    			selectAll: false,
    			selectArr: this.multipleSelection
    		}
    	}
    	this.$emit('remove-pro', msg)
    }
	}
}
</script>