<template>
  <div class="p_form">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="角色ID">
            <el-input v-model="form.roleId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="角色名称">
            <el-input v-model="form.roleName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="onSubmit" :loading="loadingData" icon="search">查询</el-button>
          <el-button type="primary" @click="dialogOpen" icon="plus" v-if="funcList.indexOf('1010201')>-1">新增角色</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: {
      loadingData: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        form: {
          roleId: '',
          roleName: '',
        },
        funcList: JSON.parse(sessionStorage.getItem('funcList'))
      }
    },
    methods: {
      onSubmit() {
        if (this.loadingData) {
          return
        }
        this.$emit('form-submit', this.form)
      },
      dialogOpen() {
        this.$emit('dialog-open')
      }
    }
  }
</script>
<style scoped>
  .p_form {
    margin-bottom: 10px;
  }
</style>
