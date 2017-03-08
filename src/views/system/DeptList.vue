<template>
  <div>
    <dept-form @form-submit="search"></dept-form>
    <dept-grid></dept-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  import { DeptForm, DeptGrid } from '../../components'
  export default {
    components: {
      DeptForm,
      DeptGrid
    },
  }
</script>
