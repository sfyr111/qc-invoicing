<template>
  <div>
    <vendor-form @form-submit="search"></vendor-form>
    <vendor-grid></vendor-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  import { VendorForm, VendorGrid } from '../../components'
  export default {
    components: {
      VendorForm,
      VendorGrid
    },
  }
</script>
