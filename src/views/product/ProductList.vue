<template>
  <div>
    <product-form @form-submit="search" @add-product="addProduct"></product-form>
    <product-grid></product-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="1000"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { ProductForm, ProductGrid } from '../../components'
  export default {
  	components: {
      ProductForm,
      ProductGrid
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
        page: 1,
        limit: 10
      }
    },
    created () {
      this.initGrid()
    },
    methods: {
  		initGrid () {
  			let data = {
          productId: this.form.productId || '',
          skuCode: this.form.skuCode || '',
          productCode: this.form.productCode || '',
          brand: this.form.brand || '',
          firstCategoryId: this.form.firstCategoryId || '',
          secondCategoryId: this.form.secondCategoryId || '',
          thirdCategoryId: this.form.thirdCategoryId || '',
          status: this.form.status || '',
          page: this.page,
          limit: this.limit
        };
  			let opt = {
  				url: configUrl.productList.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            console.log(resp)
          },
          fail: function (resp) {
            console.log(resp)
          }
        };
  			this.$store.dispatch('productList', opt)
      },
      search (form) {
  			this.form = form
        this.initGrid()
      },
      changePage (page) {
  			this.page = page
  			this.initGrid()
      },
      addProduct () {
  			this.$router.push({
          name: 'productModel'
        })
      }
    }
  }
</script>
