<template>
  <div>
    <vendor-form @form-submit="search" @add-vendor="addVendor"></vendor-form>
    <vendor-grid
      :loading-data="loadingData"
      :table-data="list"
      @del-row="delVendor"
      @edit-row="editVendor"></vendor-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { VendorForm, VendorGrid } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      VendorForm,
      VendorGrid
    },
    computed: {
      ...mapGetters({
      	list: 'getVendorList'
      })
    },
    data () {
    	return {
        form: {
          code: '',
          name: '',
          phone: '',
          contacts: '',
        },
        pageNo: 1,
        pageSize: 10,
        total: 0,
        loadingData: false
      }
    },
    created () {
    	this.initGrid()
    },
    methods: {
    	initGrid() {
    		if (this.loadingData) {
    			return
        }
    		let _this = this
        this.loadingData = true
    		let data = {
          code: this.form.code || '',
          name: this.form.name || '',
          phone: this.form.phone || '',
          contacts: this.form.contacts || '',
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        let opt = {
          url: configUrl.supplierlist.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            _this.total = resp.data.total
            _this.loadingData = false
            console.log(resp)
          },
          fail: function (resp) {
            console.log(resp)
            _this.loadingData = false
          }
        }
        this.$store.dispatch('vendorList', opt)
      },
      search (form) {
        this.form = form
        this.initGrid()
      },
      delVendor (id) {
        if (this.loadingData) {
          return
        }
        this.loadingData=true
        let _this = this
        let opt = {
          url: configUrl.supplierDel.dataUrl,
          data: {
          	id: id
          },
          type: 'post',
          success: function (resp) {
            _this.loadingData = false
            _this.$message({
              showClose: true,
              message: resp.msg,
            });
            _this.initGrid()
          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
            _this.loadingData = false
          }
        }
        this.$store.dispatch('vendorDel', opt)
      },
      addVendor () {
        this.$router.push({
          name: 'vendorAdd',
          query: {
            pageType: 'add'
          }
        })
      },
      editVendor (row) {
        this.$router.push({
          name: 'vendorAdd',
          query: {
            pageType: 'edit',
            editId: row.id
          }
        })
      }
    }
  }
</script>
