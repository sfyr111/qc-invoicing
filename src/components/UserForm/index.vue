<template>
  <div class="p_form">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="用户姓名">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="部门编号">
            <el-input v-model="form.deptId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="手机号码">
            <el-input v-model="form.selfPhone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="onSubmit" :loading="loadingData" icon="search">查询</el-button>
          <el-button type="primary" @click="dialogOpen" icon="plus">新建用户</el-button>
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
          userName: '',
          deptId: '',
          selfPhone: '',
        }
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
