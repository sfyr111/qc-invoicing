<template>
  <div>
    <menu-form
      @form-submit="search"
      :loading-data="loadingData"
      @dialog-open="dialogOpen"></menu-form>
    <menu-grid
      :table-data="menuList"
      :loading-data="loadingData"
      @menu-del="menuDel"
      @row-edit="menuEdit"></menu-grid>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage">
    </el-pagination>
    <el-dialog title="菜单" v-model="dialogVisible" :show-close="true" size="tiny">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item label="功能编号" label-width="100px" prop="functionId">
          <el-input v-model="ruleForm.functionId" :readonly="edit"></el-input>
        </el-form-item>
        <el-form-item label="功能名称" label-width="100px" prop="functionName">
          <el-input v-model="ruleForm.functionName"></el-input>
        </el-form-item>
        <el-form-item label="上级编号" label-width="100px">
          <el-input v-model="ruleForm.parentFunctionId" :readonly="edit"></el-input>
        </el-form-item>

        <el-form-item label="功能级别" label-width="100px">
          <el-input v-model="ruleForm.functionLevel"></el-input>
        </el-form-item>
        <el-form-item label="URL" label-width="100px">
          <el-input v-model="ruleForm.functionUrl"></el-input>
        </el-form-item>
        <el-form-item label="功能排序" label-width="100px">
          <el-input v-model="ruleForm.functionOrder"></el-input>
        </el-form-item>
        <el-form-item label="是否是菜单" label-width="100px">
          <el-select v-model="ruleForm.isMenu" placeholder="请选择性别">
            <el-option v-for="isMenu in isMenus" :key="isMenu.value" :label="isMenu.text" :value="isMenu.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否有效" label-width="100px" prop="sex">
          <el-select v-model="ruleForm.isValid" placeholder="请选择性别">
            <el-option v-for="isValid in isValids" :key="isValid.value" :label="isValid.text" :value="isValid.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否要授权" label-width="100px" prop="sex">
          <el-select v-model="ruleForm.accessType" placeholder="请选择是否要授权">
            <el-option v-for="accessType in accessTypes" :key="accessType.value" :label="accessType.text" :value="accessType.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" label-width="100px">
          <el-input v-model="ruleForm.memo"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="menuSave('ruleForm')" :loading="hasSubmit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { MenuForm, MenuGrid } from '../../components'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      MenuForm,
      MenuGrid
    },
    computed: {
      ...mapGetters({
      	menuList: 'getMenuList'
      })
    },
    data () {
    	return {
        form: {
          functionId: '',
          functionName: '',
          isMenu: '',
          isValid: '',
          accessType: '',
        },
        ruleForm: {
          functionId: '',
          functionName: '',
          parentFunctionId: '',
          functionLevel: '',
          functionUrl: '',
          functionOrder: '',
          isMenu: 'Y',
          isValid: 'Y',
          accessType: 'Y',
          memo: '',
        },
        rules: {
          functionId: [
            { required: true, message: '请填写菜单编码', trigger: 'blur' },
          ],
          functionName: [
            { required: true, message: '请填写菜单名称', trigger: 'blur' },
          ],
        },
        accessTypes: [
          {
          	text: '需要',
            value: 'Y'
          },{
            text: '不需要',
            value: 'N'
          },
        ],
        isValids: [
          {
          	text: '有效',
            value: 'Y'
          },{
            text: '无效',
            value: 'N'
          },
        ],
        isMenus: [
          {
          	text: '是',
            value: 'Y'
          },{
            text: '否',
            value: 'N'
          },
        ],
        dialogVisible: false,
        hasSubmit: false,
        pageNo: 1,
        pageSize: 10,
        total: 0,
        loadingData: false,
        edit: false
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
            functionId: '',
            functionName: '',
            parentFunctionId: '',
            functionLevel: '',
            functionUrl: '',
            functionOrder: '',
            isMenu: 'Y',
            isValid: 'Y',
            accessType: 'Y',
            memo: '',
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
          functionId: this.form.functionId || '',
          functionName: this.form.functionName || '',
          isMenu: this.form.isMenu || '',
          isValid: this.form.isValid || '',
          accessType: this.form.accessType || '',
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        let opt = {
          url: configUrl.menuList.dataUrl,
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
        this.$store.dispatch('menuList', opt)
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
      menuDel(functionId) {
        if (this.loadingData) {
          return
        }
        let _this = this
        let data = {
          functionId: functionId,
        }
        let opt = {
          url: configUrl.menuDel.dataUrl,
          data: data,
          type: 'post',
          success: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'success'
            });
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
        this.$store.dispatch('menuDel', opt)
      },
      dialogOpen() {
        this.dialogVisible=true
        this.edit=false
      },
      menuEdit(row) {
        this.ruleForm.functionId=row.functionId || ''
        this.ruleForm.functionName=row.functionName || ''
        this.ruleForm.parentFunctionId=row.parentFunctionId || ''
        this.ruleForm.functionLevel=row.functionLevel || ''
        this.ruleForm.functionUrl=row.functionUrl || ''
        this.ruleForm.functionOrder=row.functionOrder || ''
        this.ruleForm.isMenu=row.isMenu || ''
        this.ruleForm.isValid=row.isValid || ''
        this.ruleForm.accessType=row.accessType || ''
        this.ruleForm.memo=row.memo || ''
        this.dialogOpen()
        this.edit=true
      },
      menuSave(formName) {
        if (this.hasSubmit) {
          return
        }
        let _this = this
        let data = {
          functionId: this.ruleForm.functionId || '',
          functionName: this.ruleForm.functionName || '',
          parentFunctionId: this.ruleForm.parentFunctionId || '',
          functionLevel: this.ruleForm.functionLevel || '',
          functionUrl: this.ruleForm.functionUrl || '',
          functionOrder: this.ruleForm.functionOrder || '',
          isMenu: this.ruleForm.isMenu || '',
          isValid: this.ruleForm.isValid || '',
          accessType: this.ruleForm.accessType || '',
          memo: this.ruleForm.memo || '',
        }
        let url = configUrl.menuSave.dataUrl
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
            this.$store.dispatch('menuSave', opt)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
