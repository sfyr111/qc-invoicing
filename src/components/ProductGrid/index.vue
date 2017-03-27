<template>
  <div class="minh600">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      fit
      v-loading.body="loadingData"
      element-loading-text="拼命加载中">
      <el-table-column
        label="商品编码"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.productId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="京东商品编码"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.jdSkuCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="商品名称"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px" :title="scope.row.productName">{{ scope.row.productName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="商品分类"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px" :title="scope.row.productName+scope.row.secondCategoryName+scope.row.thirdCategoryName">{{ scope.row.firstCategoryName }}-{{ scope.row.secondCategoryName }}-{{ scope.row.thirdCategoryName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="品牌"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.brand }}</span>
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
        label="是否需要同步"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.isSynchronizeStr }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="同步状态"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.syncStatusStr }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品单位"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.unitCn }}</span>
        </template>
      </el-table-column>

      <!--<el-table-column-->
        <!--label="采购含税价格"-->
        <!--width="180"-->
        <!--align="center">-->
        <!--<template scope="scope">-->
          <!--<span style="margin-left: 10px">{{ scope.row.priceTax }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

      <!--<el-table-column-->
        <!--label="采购不含税价格"-->
        <!--width="180"-->
        <!--align="center">-->
        <!--<template scope="scope">-->
          <!--<span style="margin-left: 10px">{{ scope.row.priceNoTax }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->

      <el-table-column
        label="库存数量"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.productStock }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="创建时间"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
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
            @click="handleEdit(scope.$index, scope.row)">编辑&查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
  	props: {
      tableData: {
      	type: Array
      },
      loadingData: {
      	type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    },
    methods: {
      handleEdit(index, row) {
      	this.$emit('product-edit', row)
      }
    }
  }
</script>
