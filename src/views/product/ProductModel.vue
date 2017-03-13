<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品基本信息" name="first">
        <product-model-base
        :submit-suc="submitSuc"
        :product-id="productId"></product-model-base>
      </el-tab-pane>
      <el-tab-pane :disabled="disableSecond" label="供应商价格信息" name="second">
        <product-model-price></product-model-price>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import configUrl from '../../data/configUrl'
  import { ProductModelBase, ProductModelPrice } from '../../components'
  export default {
  	computed: {
      ...mapGetters({
        categoryListFirst: 'getCategoryListFirst',
        categoryListSecond: 'getCategoryListSecond',
        categoryListThird: 'getCategoryListThird'
      }),
      disableSecond () {
        if (this.pageType==='add' && !this.addSuc) {
          return true
        }
        if (this.pageType==='add' && this.addSuc) {
          return false
        }
        return false
      },
      productId () {
        if (this.id) {
          return this.id.toString()
        }
        if (this.editId) {
          return this.editId.toString()
        }
      }
    },
    components: {
      ProductModelBase,
      ProductModelPrice
    },
    data() {
      return {
        activeName: 'first',
        addSuc: false,
        id: '',
        editId: this.$route.query.editId,
        pageType: this.$route.query.pageType || '',
      }
    },
    methods: {
      handleClick (tab, event) {
        if (tab.name === 'second') {
          if (this.hasLoad) {
            return
          }
          this.initPrice()
        }
      },
      submitSuc (resp) {
        this.activeName = 'second'
        if (resp.data) {
          this.id = resp.data.productId
        }
        this.addSuc = true
        this.initPrice()
      },
      initPrice () {
        let _this = this
        let opt = {
          url: configUrl.supplierContractList.dataUrl,
          data: {
            supplierId: this.supplierId
          },
          type: 'get',
          success: function (resp) {
            _this.hasLoad=true
            console.log(resp)
          },
          fail: function (resp) {
            console.log(resp)
          }
        }
        this.$store.dispatch('supplierContractList', opt)
      }
    }
  }
</script>
<style scoped>
  .el-form {
    width: 550px;
    margin: 0 auto;
  }
</style>
