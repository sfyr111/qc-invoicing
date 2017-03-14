<template>
  <div>
    <role-form
      @form-submit="search"
      :loading-data="loadingData"
      @dialog-open="dialogOpen"></role-form>
    <role-grid
      :table-data="roleList"
      :loading-data="loadingData"
      @role-del="roleDel"
      @edit-row="roleEdit"></role-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage">
    </el-pagination>

    <el-dialog title="角色" v-model="dialogVisible" :show-close="true" size="tiny">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item label="角色名" label-width="100px" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="是否有效" label-width="100px">
          <el-select v-model="ruleForm.isValid" placeholder="请选择性别">
            <el-option v-for="isValid in isValids" :key="isValid.value" :label="isValid.text" :value="isValid.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" label-width="100px">
          <el-input v-model="ruleForm.memo"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="roleSave('ruleForm')" :loading="hasSubmit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { RoleForm, RoleGrid } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      RoleForm,
      RoleGrid
    },
    computed: {
      ...mapGetters({
      	roleList: 'getRoleList'
      })
    },
    data() {
    	return {
    		form: {
          roleId: '',
          roleName: '',
        },
        ruleForm: {
          roleId: '',
          roleName: '',
          isValid: 'Y',
          memo: ''
        },
        rules: {
          roleName: [
            { required: true, message: '请填写角色名称', trigger: 'blur' },
          ],
        },
        isValids: [
          {
            text: '有效',
            value: 'Y'
          },{
            text: '无效',
            value: 'N'
          },
        ],
        dialogVisible: false,
        hasSubmit: false,
        pageNo: 1,
        pageSize: 10,
        total: 0,
        loadingData: false
      }
    },
    created() {
    	this.initGrid()
    },
    watch: {
      dialogVisible: function (newVal, oldVal) {
        if (!newVal) {
          this.$refs.ruleForm.resetFields()
          var oldForm= {
            roleId: '',
            roleName: '',
            isValid: 'Y',
            memo: ''
          }
          this.ruleForm=oldForm
        }
      }
    },
    methods: {
      initGrid () {
        if (this.loadingData) {
          return
        }
        let _this = this
        this.loadingData = true
        let data = {
          roleId: this.form.roleId || '',
          roleName: this.form.roleName || '',
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        let opt = {
          url: configUrl.roleList.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            _this.total = resp.data.total
            _this.loadingData = false
          },
          fail: function (resp) {
            console.log(resp)
            _this.loadingData = false
          }
        }
        this.$store.dispatch('roleList', opt)
      },
      search (form) {
        this.form = form
        this.pageNo=1
        this.initGrid()
      },
      changePage (page) {
        this.pageNo = page
        this.initGrid()
      },
      roleDel (roleId) {
        if (this.loadingData) {
          return
        }
        let data = {
          roleId: roleId,
        }
        let opt = {
          url: configUrl.roleDel.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            _this.initGrid()
          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        }
        this.$store.dispatch('roleDel', opt)
      },
      dialogOpen() {
        this.dialogVisible=true
      },
      roleEdit(row) {
        this.ruleForm.roleId=row.roleId || ''
        this.ruleForm.roleName=row.roleName || ''
        this.ruleForm.isValid=row.isValid || ''
        this.ruleForm.memo=row.memo || ''
        this.dialogOpen()
      },
      roleSave(formName) {
        if (this.hasSubmit) {
          return
        }
        let _this = this
        let data = {
          roleId:this.ruleForm.roleId || '',
          roleName:this.ruleForm.roleName || '',
          isValid:this.ruleForm.isValid || '',
          memo:this.ruleForm.memo || '',
        }
        let url = configUrl.roleSave.dataUrl
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.hasSubmit = true
            let opt = {
              url: url,
              type: 'post',
              data: data,
              success: function (resp) {
                _this.hasSubmit = false
                _this.$message({
                  showClose: true,
                  message: resp.msg,
                  type: 'success'
                });
                _this.dialogVisible=false
                _this.initGrid()
              },
              fail: function (resp) {
                _this.hasSubmit=false
                _this.$message({
                  showClose: true,
                  message: resp.msg,
                  type: 'error'
                });
                console.log(resp)
              }
            };
            this.$store.dispatch('roleSave', opt)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
