<template>
  <div>
    <menu-form @form-submit="search"></menu-form>
    <menu-grid></menu-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  import { MenuForm, MenuGrid } from '../../components'
  export default {
    components: {
      MenuForm,
      MenuGrid
    },
  }
</script>
