<template>
  <div>
    <dept-form
      @form-submit="search"
      :loading-data="loadingData"
      @dialog-open="dialogOpen"></dept-form>
    <dept-grid
      :table-data="deptList"
      :loading-data="loadingData"
      @row-del="deptDel"
      @row-edit="deptEdit"></dept-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
    <el-dialog title="部门" v-model="dialogVisible" :show-close="true" size="tiny">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item label="部门代码" label-width="100px" prop="deptCode">
          <el-input v-model="ruleForm.deptCode" :readonly="edit"></el-input>
        </el-form-item>
        <el-form-item label="部门名称" label-width="100px" prop="deptName">
          <el-input v-model="ruleForm.deptName"></el-input>
        </el-form-item>
        <el-form-item label="部门级别" label-width="100px">
          <el-input v-model="ruleForm.deptLevel"></el-input>
        </el-form-item>

        <el-form-item label="部门地址" label-width="100px">
          <el-input v-model="ruleForm.deptAddress"></el-input>
        </el-form-item>
        <el-form-item label="上级部门" label-width="100px">
          <el-input v-model="ruleForm.upDeptId"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px">
          <el-input v-model="ruleForm.memo"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveDept('ruleForm')" :loading="hasSubmit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { DeptForm, DeptGrid } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      DeptForm,
      DeptGrid
    },
    computed: {
      ...mapGetters({
      	deptList: 'getDeptList'
      })
    },
    data() {
      return {
        form: {
          deptId: '',
          deptName: '',
        },
        ruleForm: {
          deptId: '',
          deptCode: '',
          deptName: '',
          deptLevel: '',
          deptAddress: '',
          upDeptId: '',
          memo: '',
        },
        rules: {
          deptCode: [
          	{ required: true, message: '请填写部门编码', trigger: 'blur' },
          ],
          deptName: [
          	{ required: true, message: '请填部门名称', trigger: 'blur' },
          ],
        },
        hasSubmit: false,
        pageNo: 1,
        pageSize: 10,
        total: 0,
        loadingData: false,
        dialogVisible: false,
        edit: false
      }
    },
    created() {
      this.initGrid()
    },
    watch: {
    	dialogVisible: function (newVal, oldVal) {
        if (!newVal) {
        	this.$refs.ruleForm.resetFields();
        	let initForm= {
            deptId: '',
            deptCode: '',
            deptName: '',
            deptLevel: '',
            deptAddress: '',
            upDeptId: '',
            memo: '',
          };
          this.ruleForm=initForm
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
          deptId: this.form.deptId || '',
          deptName: this.form.deptName || '',
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        let opt = {
          url: configUrl.deptList.dataUrl,
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
        this.$store.dispatch('deptList', opt)
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
      dialogOpen() {
      	this.dialogVisible=true
        this.edit=false
      },
      deptDel(roleId) {
        if (this.loadingData) {
          return
        }
        let data = {
          roleId: roleId,
        }
        let opt = {
          url: configUrl.deptDel.dataUrl,
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
        this.$store.dispatch('deptDel', opt)
      },
      deptEdit(row) {
        this.ruleForm.deptId=row.deptId
        this.ruleForm.deptCode=row.deptCode
        this.ruleForm.deptName=row.deptName
        this.ruleForm.deptLevel=row.deptLevel
        this.ruleForm.deptAddress=row.deptAddress
        this.ruleForm.upDeptId=row.upDeptId
        this.ruleForm.memo=row.memo
        this.dialogOpen()
        this.edit=true
      },
      saveDept(formName) {
        if (this.hasSubmit) {
          return
        }
        let _this = this
        let data = {
          deptId: this.ruleForm.deptId || '',
          deptCode: this.ruleForm.deptCode || '',
          deptName: this.ruleForm.deptName || '',
          deptLevel: this.ruleForm.deptLevel || '',
          deptAddress: this.ruleForm.deptAddress || '',
          upDeptId: this.ruleForm.upDeptId || '',
          memo: this.ruleForm.memo || '',
        }
        let url = configUrl.deptSave.dataUrl
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
            this.$store.dispatch('deptSave', opt)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>
