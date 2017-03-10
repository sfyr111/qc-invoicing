<template>
  <div class="minh600">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="供应商基本信息" name="first">
        <vendor-model-base
          @v-submit="onSubmit"
          :supplier-id="supplierId"></vendor-model-base>
      </el-tab-pane>
      <el-tab-pane :disabled="disableSecond" label="合同信息" name="second">
        <vendor-model-contract
          @upload-suc="uploadSuc"
          @del-suc="delSuc"
          :table-data="list"
          :supplier-id="supplierId"></vendor-model-contract>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { VendorModelBase, VendorModelContract } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
  	computed: {
      ...mapGetters({
      	list: 'getSupplierContractList'
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
      supplierId () {
      	if (this.id) {
      		return this.id+''
        }
        if (this.editId) {
          return this.editId+''
        }
      }
    },
  	components: {
      VendorModelBase,
      VendorModelContract
    },
    data () {
      return {
        activeName: 'first',
        addSuc: false,
        id: '',
        editId: this.$route.query.editId || '',
        pageType: this.$route.query.pageType || '',
        hasLoad: false
      }
    },
    methods: {
      handleClick (tab, event) {
      	if (tab.name === 'second') {
      		if (this.hasLoad) {
      			return
          }
          this.initContract()
        }
      },
      onSubmit (resp) {
        this.activeName = 'second'
        if (resp.data) {
          this.id = resp.data.id
        }
        this.addSuc = true
        this.initContract()
      },
      uploadSuc () {
        this.initContract()
      },
      delSuc () {
      	this.initContract()
      },
      initContract () {
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
