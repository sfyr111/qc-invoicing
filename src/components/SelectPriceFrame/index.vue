<template>
  <div class="select_pro_frame">
    <!-- 查询 -->
    <el-form label-width="120px">
      <el-col :span="12">
        <el-form-item label="供应商:">
          <el-select
            remote
            :loading="loadingVend"
            @visible-change="remoteVendorList"
            @change="venderChange(id)"
            v-model="id"
            filterable
            clearable
            placeholder="请选择供应商">
            <el-option
              v-for="vendor in vendorList"
              :key="vendor.code"
              :label="vendor.name"
              :value="vendor.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="供应商编码:">
          {{supplierDetail.supplierCode}}
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="联系人:">
          {{supplierDetail.contacts}}
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="联系电话:">
          {{supplierDetail.contactsPhone}}
        </el-form-item>
      </el-col>
    </el-form>

    <!-- tab -->
    <el-table
      :data="supplierProduct"
      border
      max-height="460">
      <el-table-column
        label="供应商"
      >
        <template scope="scope">
          <span class="overfl-oneline" :title="scope.row.supplierName">
            {{ scope.row.supplierName }}
           </span>
          </template>
      </el-table-column>

      <el-table-column
        label="供应商编码"
      >
        <template scope="scope">
          {{ scope.row.supplierCode }}
        </template>
      </el-table-column>

      <el-table-column
        label="联系人"
      >
        <template scope="scope">
            <span class="overfl-oneline" :title="scope.row.contacts">
              {{ scope.row.contacts }}
            </span>
        </template>
      </el-table-column>

      <el-table-column
        label="联系人电话"
      >
        <template scope="scope">
            <span class="overfl-oneline" :title="scope.row.contactsPhone">
              {{ scope.row.contactsPhone }}
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

      <!--<el-table-column
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
      </el-table-column>-->
    </el-table>
    <span class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="selectPriceList">确 定</el-button>
    </span>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  import configUrl from '../../data/configUrl'
  export default {
    props: {
      //	价格列表
      productId: {
        type: String
      }
    },
    computed: {
      ...mapGetters({
        dataPrice: 'getSupplierPrice',
        vendorList: 'getVendorList'
      }),
      supplierDetail() {
      	if (this.dataPrice && this.dataPrice.supplierDetail) {
      		return this.dataPrice.supplierDetail
        } else {
      		return {}
        }
      },
      supplierProduct() {
      	if (this.dataPrice && this.dataPrice.supplierProduct) {
          return this.dataPrice.supplierProduct
        }
        return []
      },
    },
    watch: {
    	id(newVal, oldVal) {
    		if (!newVal) {
    			this.$store.dispatch('clrPric')
        }
      }
    },
    data () {
      return {
        loadingVend: false,
        hasLoadVend: false,
        id: '',
      }
    },

    methods: {
      //	商品分类
      remoteVendorList (show) {
        if (!show || this.hasLoadVend) {
          return
        }
        let _this = this
        this.loadingVend = true
        let opt = {
          url: configUrl.supplierlist.dataUrl,
          type: 'get',
          data: {
            pageSize: 1000
          },
          success: function (resp) {
            _this.loadingVend = false
            _this.hasLoadVend = true
          },
          fail: function (resp) {
            _this.loadingVend=false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
        this.$store.dispatch('vendorList', opt)
      },
      venderChange (val) {
      	if (!val) {
      		return
        }
      	let _this = this
        let opt = {
          url: configUrl.productSuppInfo.dataUrl,
          type: 'post',
          data: {
            productId: this.productId,
            supplierId: val
          },
          success: function (resp) {

          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        }
        this.$store.dispatch('supplierPrice', opt)
      },
      close () {
      	this.$emit('d-close')
      },
      selectPriceList() {
        this.$emit('push-list', this.supplierProduct)
        this.id=''
        this.$store.dispatch('clrPric')
      }
    },
  }
</script>


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
          margin-top: 7px;
        }
      }
    }
    .dialog-footer {
      display: block;
      margin-top: 28px;
      text-align: right;
    }
  }
</style>
