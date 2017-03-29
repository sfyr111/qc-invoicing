<template>
  <div class="p_form">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="功能编号">
            <el-input v-model="form.functionId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="功能名称">
            <el-input v-model="form.functionName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="是否菜单">
            <el-select v-model="form.isMenu" placeholder="是否菜单">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="是否有效">
            <el-select v-model="form.isValid" placeholder="是否有效">
              <el-option label="有效" value="Y"></el-option>
              <el-option label="无效" value="N"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="是否要授权">
            <el-select v-model="form.accessType" placeholder="是否需要授权">
              <el-option label="需要" value="Y"></el-option>
              <el-option label="不需要" value="N"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="onSubmit" :loading="loadingData" icon="search">查询</el-button>
          <el-button type="primary" @click="dialogOpen" icon="plus" v-if="funcList.indexOf('1010301')>-1">新建菜单</el-button>
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
          functionId: '',
          functionName: '',
          isMenu: '',
          isValid: '',
          accessType: '',
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
