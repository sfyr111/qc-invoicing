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
      :data="tabData"
      border
      style="width: 100%"
      :max-height="maxHeight"
      @selection-change="handleSelectionChange"
      >

      <el-table-column
        type="selection"
        width="55"
        v-if="tabData.length"
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
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品名称"
        width="180"
        align="center">
        <template scope="scope" class="yichu2">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品分类"
        width="180"
        align="center">
        <template scope="scope"  class="yichu2">
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品版本"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品SKU"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品69码"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="品牌"
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
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="入库数量"
        width="180"
        align="center">
        <template scope="scope">
          <el-input type="number" min="1"></el-input>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
	data () {
		return {
			maxHeight: 442,											//	最大高度
			tabData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],											 //	要新增的商品数组
			multipleSelection: [],						//	选择商品数组
		}
	},

	created () {
	},

	methods: {
		//	选择商品
		selectPro () {
			console.log('选择商品')
      this.$emit('select-pro')
		},

		// 删除商品
		removePro () {
			console.log('删除')
		},

		//	勾选商品
		handleSelectionChange(val) {
			console.log(val)
      this.multipleSelection = val
    },
	}
}
</script>