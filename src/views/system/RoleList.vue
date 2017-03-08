<template>
  <div>
    <role-form @form-submit="search"></role-form>
    <role-grid></role-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  import { RoleForm, RoleGrid } from '../../components'
  export default {
    components: {
      RoleForm,
      RoleGrid
    },
  }
</script>
