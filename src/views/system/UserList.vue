<template>
  <div>
    <user-form
      @form-submit="search"
      @dialog-open="dialogOpen"
      :loading-data="loadingData"></user-form>
    <user-grid
      :table-data="userList"
      :loading-data="loadingData"
      @edit-row="editRow"></user-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage">
    </el-pagination>
    <el-dialog title="用户" v-model="dialogVisible" :show-close="true" size="tiny">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item label="用户姓名" label-width="100px" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" label-width="100px">
          <el-input v-model="ruleForm.nickName"></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="100px">
          <el-select clearable v-model="ruleForm.status" placeholder="请选择状态">
            <el-option v-for="status in statusc" :key="status.value" :label="status.text" :value="status.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门名称" label-width="100px" prop="deptId">
          <el-select remote :loading="loadingDept" clearable @visible-change="remoteDept" v-model="ruleForm.deptId" placeholder="请选择角色">
            <el-option v-for="dept in deptList" :key="dept.deptId" :label="dept.deptName" :value="dept.deptId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户性别" label-width="100px">
          <el-select clearable v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option v-for="sex in sexs" :key="sex.value" :label="sex.text" :value="sex.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号码" label-width="100px" prop="selfPhone">
          <el-input v-model="ruleForm.selfPhone"></el-input>
        </el-form-item>
        <el-form-item label="Email" label-width="100px">
          <el-input v-model="ruleForm.selfEmail"></el-input>
        </el-form-item>
        <el-form-item label="角色" label-width="100px" prop="roleId">
          <el-select remote :loading="loadingRole" clearable @visible-change="remoteRole" v-model.number="ruleForm.roleId" placeholder="请选择角色">
            <el-option v-for="role in roleList" :key="role.roleId" :label="role.roleName" :value="role.roleId"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveUser('ruleForm')" :loading="hasSubmit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { UserForm, UserGrid } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      UserForm,
      UserGrid,
    },
    computed: {
      ...mapGetters({
      	userList: 'getUserList',
        roleList: 'getRoleList',
        deptList: 'getDeptList',
      })
    },
    watch: {
      dialogVisible: function (newVal, oldVal) {
        if (!newVal) {
          this.$refs.ruleForm.resetFields()
          var oldForm= {
            userId: '',
            userName: '',
            password: '',
            nickName: '',
            status: 'VALID',
            deptId: '',
            sex: 'MEN',
            selfPhone: '',
            selfEmail: '',
            roleId: ''
          }
          this.ruleForm=oldForm
        }
      }
    },
    data () {
    	return {
        form: {
          userName: '',
          deptId: '',
          selfPhone: '',
        },
        ruleForm: {
          userId: '',
          userName: '',
          password: '',
          nickName: '',
          status: 'VALID',
          deptId: '',
          sex: 'MEN',
          selfPhone: '',
          selfEmail: '',
          roleId: ''
        },
        sexs: [{
        	text: '男',
          value: 'MEN'
        },{
          text: '女',
          value: 'WOMEN'
        }],
        statusc: [{
        	text: '有效',
          value: 'VALID'
        },{
          text: '无效',
          value: 'FREEZE'
        }],
    		pageNo: 1,
        pageSize: 10,
        total: 0,
        loadingData: false,
        dialogVisible: false,
        loadingRole: false,
        hasLoadingRole: false,
        loadingDept: false,
        hasLoadingDept: false,
        hasSubmit: false,
        // 校验
        rules: {
          userName: [
            { required: true, message: '请填名称', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          deptId: [
            { required: true, message: '请选择部门', trigger: 'blur' }
          ],
          selfPhone: [
            { required: true, message: '输入电话', trigger: 'blur' }
          ],
          roleId: [
            { required: true, message: '请选择角色', trigger: 'blur' }
          ]
        }
      }
    },
    created () {
      this.initGrid()
    },
    methods: {
      initGrid () {
        if (this.loadingData) {
          return
        }
        let _this = this
        this.loadingData = true
        let data = {
          userName: this.form.userName || '',
          deptId: this.form.deptId || '',
          selfPhone: this.form.selfPhone || '',
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        let opt = {
          url: configUrl.userList.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            _this.total = resp.data.total
            _this.loadingData = false
            console.log(resp)
          },
          fail: function (resp) {
            console.log(resp)
            _this.loadingData = false
          }
        }
        this.$store.dispatch('userList', opt)
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
      remoteRole(show) {
        if (!show) {
          return
        }
        if (this.hasLoadingRole) {
          return
        }
        let _this = this
        this.loadingRole = true;
        let opt = {
          url: configUrl.roleList.dataUrl,
          type: 'get',
          success: function (resp) {
            _this.loadingRole = false
            _this.hasLoadingRole = true
          },
          fail: function (resp) {
            _this.loadingRole=false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
        this.$store.dispatch('roleList', opt)
      },
      remoteDept(show) {
        if (!show) {
          return
        }
        if (this.hasLoadingDept) {
          return
        }
        let _this = this
        this.loadingDept = true;
        let opt = {
          url: configUrl.deptList.dataUrl,
          type: 'get',
          success: function (resp) {
            _this.loadingDept = false
            _this.hasLoadingDept = true
          },
          fail: function (resp) {
            _this.loadingDept=false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
        this.$store.dispatch('deptList', opt)
      },
      dialogOpen() {
      	this.dialogVisible=true
      },
      saveUser(formName) {
        if (this.hasSubmit) {
          return
        }
        let _this = this
        let data = {
          userId: this.ruleForm.userId || '',
          userName: this.ruleForm.userName || '',
          password: this.ruleForm.password || '',
          nickName: this.ruleForm.nickName || '',
          status: this.ruleForm.status || '',
          deptId: this.ruleForm.deptId || '',
          sex: this.ruleForm.sex || '',
          selfPhone: this.ruleForm.selfPhone || '',
          selfEmail: this.ruleForm.selfEmail || '',
          roleId: this.ruleForm.roleId || ''
        }
        let url = configUrl.userSave.dataUrl
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
            this.$store.dispatch('userSave', opt)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      editRow(row) {
        this.ruleForm.userId=row.userId
        this.ruleForm.userName=row.userName
        this.ruleForm.password=row.password
        this.ruleForm.nickName=row.nickName
        this.ruleForm.status= row.status
        this.remoteDept(true)
        this.ruleForm.deptId=row.deptId
        this.ruleForm.sex= row.sex
        this.ruleForm.selfPhone=row.selfPhone
        this.ruleForm.selfEmail=row.selfEmail
        this.remoteRole(true)
        this.ruleForm.roleId=row.roleId
        this.dialogOpen()
      }
    }
  }
</script>
