<template>
  <div>
    <user-form @form-submit="search"></user-form>
    <user-grid></user-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  import { UserForm, UserGrid } from '../../components'
  export default {
    components: {
      UserForm,
      UserGrid
    },
  }
</script>
