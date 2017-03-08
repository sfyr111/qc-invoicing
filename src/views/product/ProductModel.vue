<template>

  <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px">
    <el-form-item label="商品名称" prop="productName">
      <el-input v-model="ruleForm.productName"></el-input>
    </el-form-item>
    <el-form-item label="商品分类" prop="categoryNo">
      <el-col :span="8">
      <el-select v-model="ruleForm.firstCategoryId" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col :span="8">
      <el-select v-model="ruleForm.secondCategoryId" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col :span="8">
      <el-select v-model="ruleForm.thirdCategoryId" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="品牌" prop="brand">
      <el-input v-model="ruleForm.brand"></el-input>
    </el-form-item>
    <el-form-item label="商品单位" prop="productUnit">
      <el-input v-model="ruleForm.productUnit"></el-input>
    </el-form-item>
    <el-form-item label="商品同步京东">
      <el-switch on-text="" off-text="" v-model="ruleForm.isSynchronize"></el-switch>
    </el-form-item>
    <el-form-item label="保质期天数" prop="safeDays">
      <el-input v-model="ruleForm.safeDays"></el-input>
    </el-form-item>
    <el-form-item label="商品版本" prop="productCode">
      <el-col :span="7">
        <el-input v-model="ruleForm.productVersion"></el-input>
      </el-col>
      <el-col class="line" :span="4">商品69码</el-col>
      <el-col :span="7">
        <el-input v-model="ruleForm.productCode"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">添加商品版本</el-button>
      </el-col>
    </el-form-item>
    <el-form-item label="PCA">
      <el-input v-model="ruleForm.pac"></el-input>
    </el-form-item>
    <el-form-item label="PCA69码">
      <el-input v-model="ruleForm.pacCode"></el-input>
    </el-form-item>
    <el-form-item label="BOX">
      <el-input v-model="ruleForm.box"></el-input>
    </el-form-item>
    <el-form-item label="BOX码">
      <el-input v-model="ruleForm.boxCode"></el-input>
    </el-form-item>
    <el-form-item label="CAR">
      <el-input v-model="ruleForm.car"></el-input>
    </el-form-item>
    <el-form-item label="CAR码">
      <el-input v-model="ruleForm.carCode"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          productName: '',
          categoryNo: '',
          firstCategoryId: '',
          secondCategoryId: '',
          thirdCategoryId: '',
          brand: '',
          productUnit: '',
          isSynchronize: true,
          safeDays: [],
          pac: '',
          box: '',
          car: '',
          pacCode: '',
          boxCode: '',
          carCode: '',
        },
        productSku: [{
          productVersion: '',
          productCode: ''
        }],
        rules: {
          productName: [
            { required: true, message: '请填写商品名称', trigger: 'blur' },
          ],
          categoryNo: [
            { required: true, message: '请填写三级分类编码', trigger: 'change' }
          ],
          brand: [
            { required: true, message: '请填写品牌', trigger: 'blur' }
          ],
          productUnit: [
            { required: true, message: '请填写商品单位', trigger: 'blur' }
          ],
          safeDays: [
            { required: true, message: '请填写保质期天数', trigger: 'blur' }
          ],
          productCode: [
            { required: true, message: '请填写69码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style scoped>

  .el-form {
    width: 550px;
    margin: 0 auto;
  }
</style>
