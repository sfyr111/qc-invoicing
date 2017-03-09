<template>
  <div class="p_form">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="供应商编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="供应商名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="供应商电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="联系人">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="18">
          &nbsp;
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="false" icon="search">查询</el-button>
            <el-button type="primary" @click="addVendor" :loading="false" icon="plus">新建</el-button>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          code: '',
          name: '',
          phone: '',
          contacts: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.$emit('form-submit', this.form)
      },
      addVendor () {
      	this.$emit('add-vendor')
      }
    }
  }
</script>
<style scoped>
  .p_form {
    margin-bottom: 10px;
  }
</style>
