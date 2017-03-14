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
        <el-col :span="16">
          &nbsp;
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loadingData" icon="search">查询</el-button>
            <el-button type="primary" @click="addVendor" icon="plus">新建</el-button>
            <el-button type="primary" @click="importVendor()" icon="upload2">批量导入供应商</el-button>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <el-dialog class="up_box" :title="title" v-model="dialogFormVisible">
      <el-upload
        ref="upload"
        class="avatar-uploader"
        :action="action"
        :show-file-list="true"
        :on-success="handleAvatarScucess"
        :auto-upload="true"
        name="file"
        :on-error="handleAvatarError">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过20Mb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="loadingData" @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
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
          code: '',
          name: '',
          phone: '',
          contacts: '',
        },
        dialogFormVisible: false,
        title: '导入供应商',
        action: '',
      }
    },
    methods: {
      onSubmit() {
        if (this.loadingData) {
          return
        }
        this.$emit('form-submit', this.form)
      },
      addVendor () {
      	this.$emit('add-vendor')
      },
      importVendor () {
        this.dialogFormVisible=true
        this.action=configUrl.importSupplier.dataUrl
      },
      handleAvatarScucess (response, file, fileList) {
        if (!response.success) {
          this.$refs.upload.clearFiles()
          this.$message({
            showClose: true,
            message: response.msg,
            type: 'error'
          });
          return false
        } else {
          this.dialogFormVisible=false
          this.$refs.upload.clearFiles()
          this.$emit('upload-suc')
        }
      },
      handleAvatarError (err, file, fileList) {
        this.$message({
          showClose: true,
          message: err,
          type: 'error'
        });
        this.$refs.upload.clearFiles()
      },
    }
  }
</script>
<style scoped>
  .p_form {
    margin-bottom: 10px;
  }
  .up_box {
    text-align: center;
  }
</style>
