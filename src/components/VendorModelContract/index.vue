<template>
  <div>
    <el-button class="btn_plus" type="primary" icon="plus" @click="addCon">新增合同</el-button>
    <el-dialog title="上传合同" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="生效时间" label-width="100px">
          <el-date-picker
            v-model="form.startDate"
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="失效日期" label-width="100px">
          <el-date-picker
            v-model="form.endDate"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0"
            format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="上传文件" label-width="100px">
          <!--<input type="file" :value="form.contractFile"/>-->
          <el-upload
            ref="upload"
            class="avatar-uploader"
            :action="action"
            :show-file-list="true"
            :on-success="handleAvatarScucess"
            :data="{startDate: startDate,
                    endDate: endDate,
                    id: id,
                    supplierId: supplierId}"
            :auto-upload="true"
            :on-error="handleAvatarError"
            name="contractFile"
            :multiple="multiple">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过20Mb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      fit
      v-loading="loadingData"
      element-loading-text="拼命加载中">
      <el-table-column
        label="合同编号"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.contractCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="开始时间"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.startDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="失效时间"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.endDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="上传文件"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.contractName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="上传日期"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="220px">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            @click="handleDown(scope.$index, scope.row)">下载</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import util from '../../utils/util'
  export default {
  	props: {
      tableData: {
      	type: Array
      },
      supplierId: {
      	type: String
      }
    },
    computed: {
      startDate() {
      	return this.form.startDate ? util.getDateStr(this.form.startDate) : ''
      },
      endDate() {
      	return this.form.endDate ? util.getDateStr(this.form.endDate) : ''
      },
    },
    data () {
    	return {
        dialogFormVisible: false,
        loadingData: false,
        multiple: false,
        action: configUrl.supplierContractAdd.dataUrl,
        form: {
          startDate: '',
          endDate: '',
        },
        id: '',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      }
    },
    methods: {
  		addCon() {
        this.dialogFormVisible = true
        this.id=''
        this.form.startDate=''
        this.form.endDate=''
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
      handleEdit(index, row) {
      	this.dialogFormVisible=true
        this.id=row.id
        this.form.startDate = row.startDate
        this.form.endDate = row.endDate
      },
      handleDown(index, row) {
        window.open(configUrl.supplierContractDown.dataUrl+'?id='+row.id)
      },
      handleDelete(row) {
      	let _this = this
        let opt = {
          url: configUrl.supplierContractDel.dataUrl,
          data: {
            id: row.id
          },
          type: 'get',
          success: function (resp) {
            _this.$emit('del-suc')
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'success'
            });
          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        }
        this.$store.dispatch('contractDel', opt)
      }
    }
  }
</script>
<style scoped>
  .el-upload__tip {
    color: red;
  }
  .btn_plus {
    margin-bottom: 10px;
  }
</style>
