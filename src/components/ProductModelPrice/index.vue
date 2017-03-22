<template>
  <div class="purchase_return_grid">
    <!-- 选择商品和删除 -->
    <div class="select_remmove_container">
			<span @click="selectPro">
				新增
			</span>

      <span v-if="multipleSelection.length" @click="removePro">删除</span>
    </div>

    <!-- 表格tab -->
    <el-table
      :data="dataList"
      border
      fit
      max-height="460"
      @selection-change="handleSelectionChange"
    >

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="供应商"
        width="180"
        align="center">
        <template scope="scope">
          <span :title="scope.row.supplierName">{{ scope.row.supplierName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="供应商编码"
        width="180"
        align="center">
        <template scope="scope">
          <span>{{ scope.row.supplierCode }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="联系人"
        width="180"
        align="center">
        <template scope="scope">
          <span>{{ scope.row.contacts }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="联系电话"
        width="180"
        align="center">
        <template scope="scope">
          <span>{{ scope.row.contactsPhone }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品版本"
        width="180"
        align="center">
        <template scope="scope">
          <span>{{ scope.row.productVersion }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品sku"
        width="180"
        align="center">
        <template scope="scope">
          <span>{{ scope.row.skuCode }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="税率"
        width="180"
        align="center">
        <template scope="scope">
          <el-input type="number" min="0" v-model="scope.row.taxRate"></el-input>
        </template>
      </el-table-column>

      <el-table-column
        label="含税供应价"
        width="180"
        align="center">
        <template scope="scope">
          <el-input type="number" min="1" v-model="scope.row.price" @blur="inputPriceblur($event, scope.$index)"></el-input>
        </template>
      </el-table-column>

      <el-table-column
        label="不含税供应价"
        width="180"
        align="center">
        <template scope="scope">
          <span>{{ Number((1-scope.row.taxRate)*scope.row.price*100/100).toFixed(2) }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="save_box">
      <el-button type="primary" :loading="hasSubmit" @click="onSubmit()">保存</el-button>
    </div>
    <!-- 选择商品 -->
    <el-dialog title="新增价格" v-model="isShowSelectPrice" size="large">
      <select-price-frame
       :product-id="productId"
        @d-close="closeD"
        @push-list="pushList">
      </select-price-frame>
    </el-dialog>
  </div>
</template>

<script>
  import _ from 'lodash'
  import configUrl from '../../data/configUrl'
  import SelectPriceFrame from '../SelectPriceFrame/index.vue'
  import util from '../../utils/util'
  import { mapGetters } from 'vuex'
  export default {
    props: {
      productId: {
        type: String
      }
    },
    components: {
      SelectPriceFrame
    },
    data () {
      return {
      	hasLoad: false,
        hasSubmit: false,
        isShowSelectPrice: false,
        dataList: [],
        multipleSelection: [],
      }
    },

    created () {
      if (this.productId) {
        this.initGrid()
      }
    },

    methods: {
      initGrid () {
      	if (this.hasLoad) {
      		return
        }
        let _this = this
        let opt = {
          url: configUrl.supplierPriceList.dataUrl,
          type: 'get',
          data: {
            productId: this.productId
          },
          success: function (resp) {
          	_this.dataList = resp.data
          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        }
        util.getMyrequest(opt)
      },
      //	勾选商品
      handleSelectionChange(val) {
        this.multipleSelection = val
      },

      //	选择商品
      selectPro () {
        this.isShowSelectPrice=true
      },

      //	删除商品
      removePro () {
        console.log('remove')
      },
      inputPriceblur (e, index) {
        let target = e.target
        if (Number(target.value) < 1) {
        	this.dataList[index].price=1
          return
        }
      },
      onSubmit () {
      	console.log('submit')
      },
      closeD() {
        this.isShowSelectPrice=false
      },
      pushList(list) {
        this.isShowSelectPrice=false
        if (list && list.length >0) {
        	console.log(list[0])
          this.dataList.push(list[0])
        }
      }
    }
  }
</script>

<style lang="less" scoped>
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
    .save_box {
      padding-top: 20px;
      text-align: center;
    }
  }
</style>
