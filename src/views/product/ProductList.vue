<template>
  <div>
    <product-form
      @form-submit="search"
      :loading-data="loadingData"
      @add-product="addProduct"
      @upload-suc="importSuc"></product-form>
    <product-grid
      :table-data="list"
      :loading-data="loadingData"
      @product-del="productDel"
      @product-edit="productEdit"></product-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { ProductForm, ProductGrid } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
  	components: {
      ProductForm,
      ProductGrid
    },
    computed: {
      ...mapGetters({
      	list: 'getProductList'
      })
    },
    data () {
  		return {
        form: {
          productId: '',
          skuCode: '',
          productCode: '',
          brand: '',
          firstCategoryId: '',
          secondCategoryId: '',
          thirdCategoryId: '',
          status: ''
        },
        loadingData: false,
        pageNo: 1,
        pageSize: 10,
        total: 0
      }
    },
    created () {
      this.initGrid()
    },
    methods: {
  		initGrid () {
  			if (this.loadingData) {
  				return
        }
  			let _this = this
  			let data = {
          productId: this.form.productId || '',
          skuCode: this.form.skuCode || '',
          productCode: this.form.productCode || '',
          brand: this.form.brand || '',
          firstCategoryId: this.form.firstCategoryId || '',
          secondCategoryId: this.form.secondCategoryId || '',
          thirdCategoryId: this.form.thirdCategoryId || '',
          status: this.form.status || '',
          pageNo: this.pageNo,
          pageSize: this.pageSize
        };
  			this.loadingData=true
  			let opt = {
  				url: configUrl.productList.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            _this.loadingData=false
            _this.total = resp.data.total
            console.log(resp)
          },
          fail: function (resp) {
            _this.loadingData=false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
  			this.$store.dispatch('productList', opt)
      },
      search (form) {
  			if (form) {
          this.form = form
        }
        this.initGrid()
      },
      changePage (page) {
  			this.pageNo = page
  			this.initGrid()
      },
      addProduct () {
        this.$router.push({
          name: 'productModel',
          query: {
            pageType: 'add'
          }
        })
      },
      productEdit (row) {
        this.$router.push({
          name: 'productModel',
          query: {
            pageType: 'edit',
            editId: row.productId
          }
        })
      },
      productDel(row) {
  			let opt = {
  				url: configUrl.productDetail
        }
      },
      importSuc () {
  			this.pageNo=1
        this.initGrid()
      }
    }
  }
</script>
