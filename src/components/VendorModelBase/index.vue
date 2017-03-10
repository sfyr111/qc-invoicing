<template>
  <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px">

    <el-form-item label="供应商名称" prop="name">
      <el-input v-model="ruleForm.name" placeholder="请填写供应商名称"></el-input>
    </el-form-item>

    <el-form-item label="供应商地址" prop="address">
      <el-input v-model="ruleForm.address" placeholder="请填写供应商地址"></el-input>
    </el-form-item>

    <el-form-item label="供应商电话" prop="phone">
      <el-input v-model="ruleForm.phone" placeholder="供应商电话(座机格式以'-'分隔)"></el-input>
    </el-form-item>

    <el-form-item label="传真">
      <el-input v-model="ruleForm.fax" placeholder="请填写传真"></el-input>
    </el-form-item>

    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" placeholder="请填写邮箱"></el-input>
    </el-form-item>

    <el-form-item label="联系人" prop="contacts">
      <el-input v-model="ruleForm.contacts" placeholder="请填写联系人"></el-input>
    </el-form-item>

    <el-form-item label="联系人电话" prop="contactsPhone">
      <el-input v-model="ruleForm.contactsPhone" placeholder="请填写联系人电话"></el-input>
    </el-form-item>

    <el-form-item label="税务证登记号" prop="taxNumber">
      <el-input v-model="ruleForm.taxNumber" placeholder="请填写税务证登记号"></el-input>
    </el-form-item>

    <el-form-item label="开户银行" prop="openBank">
      <el-input v-model="ruleForm.openBank" placeholder="请填写开户银行"></el-input>
    </el-form-item>

    <el-form-item label="账户" prop="acctNo">
      <el-input v-model="ruleForm.acctNo" placeholder="请填写账户"></el-input>
    </el-form-item>

    <el-form-item label="开户人" prop="openAcctPerson">
      <el-input v-model="ruleForm.openAcctPerson" placeholder="请填写开户人"></el-input>
    </el-form-item>

    <el-form-item label="账期结算方式">
      <el-col :span="11">
      <el-select @change="setPaymentDays" v-model="ruleForm.paymentWay" placeholder="请选择账期结算方式">
        <el-option v-for="paymentWay in paymentWays" :key="paymentWay.value" :label="paymentWay.name" :value="paymentWay.value"></el-option>
      </el-select>
      </el-col>
      <el-col :span="2">-</el-col>
      <el-col :span="11">
      <el-select :disabled="disablePaymentDays" v-model="ruleForm.paymentDays" placeholder="请选择结算天数">
        <el-option v-for="paymentDay in paymentDaysc" :key="paymentDay.value" :label="paymentDay.name" :value="paymentDay.value"></el-option>
      </el-select>
      </el-col>
    </el-form-item>

    <el-form-item label="支付方式">
      <el-select v-model="ruleForm.payMethod" placeholder="请选择支付方式">
        <el-option v-for="payMethod in payMethods" :key="payMethod.value" :label="payMethod.name" :value="payMethod.value"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="支付约定">
      <el-select v-model="ruleForm.payAppoint" placeholder="请选择支付约定">
        <el-option v-for="payAppoint in payAppoints" :key="payAppoint.value" :label="payAppoint.name" :value="payAppoint.value"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" :loading="hasSubmit" @click="onSubmit('ruleForm')">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import configUrl from '../../data/configUrl'
  export default {
  	props: {
      supplierId: {
  			type: String
      }
    },
  	data () {
  		return {
        // 表单数据
        ruleForm: {
          name: '',
          id: '',
          address: '',
          phone: '',
          fax: '',
          email: '',
          contacts: '',
          contactsPhone: '',
          taxNumber: '',
          openBank: '',
          acctNo: '',
          openAcctPerson: '',
          paymentWay: 0,
          paymentDays: 0,
          payMethod: 1,
          payAppoint: 1,
        },
        payAppoints: [{
        	name: '预付货款',
          value: 1
        },{
          name: '货到付款',
          value: 2
        },{
          name: '分期付款',
          value: 3
        },],
        payMethods: [{
          name: '网银转账',
          value: 1
        },],
        paymentWays: [{
          name: '周结',
          value: 0
        },{
          name: '月结',
          value: 1
        },],
        paymentDaysc: [{
          name: '0',
          value: 0
        },{
          name: '10',
          value: 10
        },{
          name: '15',
          value: 15
        },{
          name: '20',
          value: 20
        },{
          name: '30',
          value: 30
        },],
        // 校验
        rules: {
          name: [
            { required: true, message: '请填写供应商名称', trigger: 'blur' },
          ],
          address: [
            { required: true, message: '请填写供应商地址', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请填写供应商电话', trigger: 'blur' }
          ],
          email: [
          	{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'
            }],
          contacts: [{
          	required: true, message: '请填写联系人', trigger: 'blur'
          }],
          contactsPhone:[{
            required: true, message: '请填写联系人电话', trigger: 'blur'
          }],
          taxNumber:[{
            required: true, message: '请填写税务证登记号', trigger: 'blur'
          }],
          acctNo:[{
            required: true, message: '请填写账户', trigger: 'blur'
          }],
          openAcctPerson: [{
            required: true, message: '请填写开户人', trigger: 'blur'
          }]
        },
        disablePaymentDays: true,
        hasSubmit: false
      }
    },
    created () {
  		if (this.supplierId) {
  			this.initData()
      }
    },
    methods: {
      onSubmit(formName) {
        if (this.hasSubmit) {
          return
        }
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.hasSubmit = true
          	let data = {
              name: this.ruleForm.name || '',
              id: this.ruleForm.id || '',
              address: this.ruleForm.address || '',
              phone: this.ruleForm.phone || '',
              fax: this.ruleForm.fax || '',
              email: this.ruleForm.email || '',
              contacts: this.ruleForm.contacts || '',
              contactsPhone: this.ruleForm.contactsPhone || '',
              taxNumber: this.ruleForm.taxNumber || '',
              openBank: this.ruleForm.openBank || '',
              acctNo: this.ruleForm.acctNo || '',
              openAcctPerson: this.ruleForm.openAcctPerson || '',
              paymentWay: this.ruleForm.paymentWay,
              paymentDays: this.ruleForm.paymentDays,
              payMethod: this.ruleForm.payMethod,
              payAppoint: this.ruleForm.payAppoint,
            }
            let url = configUrl.supplierAdd.dataUrl
            if (this.supplierId) {
            	url = configUrl.supplierEdit.dataUrl
            }
            let opt = {
              url: url,
              type: 'post',
              data: data,
              success: function (resp) {
              	_this.$message({
                  showClose: true,
                  message: resp.msg,
                });
                _this.hasSubmit = false
                _this.$emit('v-submit', resp)
              },
              fail: function (resp) {
                _this.hasSubmit=false
                _this.$message({
                  showClose: true,
                  message: resp.msg,
                  type: 'error'
                });
              }
            };
            this.$store.dispatch('vendorSave', opt)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      setPaymentDays (val) {
        if (val === 0) {
      		this.ruleForm.paymentDays=0
          this.disablePaymentDays=true
        }
        if (val === 1) {
          this.disablePaymentDays=false
        }
      },
      initData () {
        let _this = this
        let opt = {
          url: configUrl.supplierInf.dataUrl,
          data: {
            id: this.supplierId+''
          },
          type: 'get',
          success: function (resp) {
              _this.$refs.ruleForm.resetFields();

              _this.ruleForm.name=resp.data.name || ''
              _this.ruleForm.id=resp.data.id || ''
              _this.ruleForm.address=resp.data.address || ''
              _this.ruleForm.phone=resp.data.phone || ''
              _this.ruleForm.fax=resp.data.fax || ''
              _this.ruleForm.email=resp.data.email || ''
              _this.ruleForm.contacts=resp.data.contacts || ''
              _this.ruleForm.contactsPhone=resp.data.contactsPhone || ''
              _this.ruleForm.taxNumber=resp.data.taxNumber || ''
              _this.ruleForm.openBank=resp.data.openBank || ''
              _this.ruleForm.acctNo=resp.data.acctNo || ''
              _this.ruleForm.openAcctPerson=resp.data.openAcctPerson || ''
              _this.ruleForm.paymentWay=resp.data.paymentWay
              _this.ruleForm.paymentDays=resp.data.paymentDays
              _this.ruleForm.payMethod=resp.data.payMethod || ''
              _this.ruleForm.payAppoint=resp.data.payAppoint || ''
          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        }
        this.$store.dispatch('vendorInf', opt)
      },
    }
  }
</script>
<style scoped>
  .el-form {
    width: 550px;
    margin: 0 auto;
  }
</style>
