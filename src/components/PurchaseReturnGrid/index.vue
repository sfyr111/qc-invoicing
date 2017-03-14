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
      :data="tabList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      >

      <el-table-column
        type="selection"
        width="55"
        v-if="tabList.length"
      >
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
          <span style="margin-left: 10px">{{ scope.row.productId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品名称"
        width="180"
        align="center">
        <template scope="scope" class="yichu2">
          <span style="margin-left: 10px">{{ scope.row.productName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品分类"
        width="180"
        align="center">
        <template scope="scope"  class="yichu2">
          <span style="margin-left: 10px">{{ scope.row.category }}</span>
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
          <span style="margin-left: 10px">{{ scope.row.price }}</span>
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
        :label="labelStr"
        width="180"
        align="center">
        <template scope="scope">
          <el-input type="number" min="1" v-model="tabList[scope.$index].purQuantity" @input="inputPurNum(scope.$index, $event)" @blur="inputPurQuantityblur($event, scope.$index)"></el-input>
          <!-- <el-input type="number" min="1" @input="inputPurNum(scope.$index, $event)"></el-input> -->
        </template>
      </el-table-column>

      <el-table-column
        label="小计金额(含税)"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ Number(scope.row.subtotalPrice).toFixed(2) }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="小计金额(不含税)"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ Number(scope.row.subtotalPriceNoTax).toFixed(2)}}</span>
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

  .el-table .cell{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .el-input__inner{
    height: 30px;
  }
}
</style>

<script>
export default {
	props: {
		tabList: {
			type: Array,
			default: []
		},
    //  是采购新增还是退货新增
    isReturn: {
      type: Number,
      default: 0
    },

    //  供应商code
    code: {
      type: String,
      default: ''
    }
	},
	data () {
		return {
			multipleSelection: [],
      labelStr: '',           //  采购还是退货文案
      inputPruNumTimer: null,           //  输入采购数量控制
		}
	},

	created () {
    if (this.isReturn) {
      this.labelStr = '退货数量'
    }
    else {
      this.labelStr = '采购数量'
    }
	},

	methods: {
		//	勾选商品
		handleSelectionChange(val) {
			//console.log(val)
      this.multipleSelection = val
    },

    //	选择商品
    selectPro () {
      if (!this.code) {
        this.$message.error('请先选择供货方')
        return
      }
    	this.$emit('select-pro')
    },

    //	删除商品
    removePro () {
    	let msg = {}
    	//	全选
    	if (this.multipleSelection.length === this.tabList.length && this.multipleSelection.length) {
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
    },

    //  输入采购 或退货数量
    inputPurNum (index, val) {
      //  输入为空或0时
      if (!Number(val)) {
        return
      }
      if (this.inputPruNumTimer) {
        clearTimeout(this.inputPruNumTimer)
      }

      this.inputPruNumTimer = setTimeout(function () {
        let msg = {
          index: index,
          val: val
        }
        this.$emit('input-pru-num', msg)
      }.bind(this), 300)
    },

    //  采购数量输入 blur
    inputPurQuantityblur (e, index) {
      //  输入小于1强制设置为1
      let target = e.target
      if (Number(target.value) > 1) {
        return
      }

      let msg = {
        val: 1,
        index: index
      }
      this.$emit('input-pru-quantity-blur', msg)
    }
	}
}
</script>