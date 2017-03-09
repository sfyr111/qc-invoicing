<template>
  <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px">
    <el-form-item label="商品名称" prop="productName">
      <el-input v-model="ruleForm.productName" placeholder="请填写商品名称"></el-input>
    </el-form-item>
    <el-form-item label="商品分类" prop="categoryNo">
      <el-col :span="8">
        <el-select remote :loading="loadingFirst" @visible-change="remoteFirst" v-model="ruleForm.firstCategoryId" placeholder="请选择一级分类">
          <el-option v-for="first in categoryListFirst" :key="first.id" :label="first.name" :value="first.id"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select remote :loading="loadingSecond" @visible-change="remoteSecond" :disabled="disabledSecond" v-model="ruleForm.secondCategoryId" placeholder="请选择二级分类">
          <el-option v-for="second in categoryListSecond" :key="second.id" :label="second.name" :value="second.id"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select remote :loading="loadingThird" @visible-change="remoteThird" :disabled="disabledThird" v-model="ruleForm.thirdCategoryId" placeholder="请选择三级分类">
          <el-option v-for="third in categoryListThird" :key="third.id" :label="third.name" :value="third.id"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="品牌" prop="brand">
      <el-input v-model="ruleForm.brand" placeholder="请填写品牌"></el-input>
    </el-form-item>
    <el-form-item label="商品单位" prop="productUnit">
      <el-input v-model="ruleForm.productUnit" placeholder="请填写商品单位"></el-input>
    </el-form-item>
    <el-form-item label="商品同步京东">
      <el-switch on-text="" off-text="" v-model="ruleForm.isSynchronize"></el-switch>
    </el-form-item>
    <el-form-item label="保质期天数" prop="safeDays" placeholder="请填写保质期">
      <el-input v-model="ruleForm.safeDays"></el-input>
    </el-form-item>
    <el-form-item
      v-for="(product, index) in ruleForm.productSku"
      label="商品版本"
      :key="product.key"
      :prop="'productSku.' + index + '.productCode'" :rules="{
        required: true, message: '商品69码', trigger: 'blur'
      }">
      <el-col :span="7">
        <el-input v-model="product.productVersion"></el-input>
      </el-col>
      <el-col class="line" :span="4">商品69码</el-col>
      <el-col :span="7">
        <el-input v-model="product.productCode"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button v-if="index>0" @click.prevent="removeProductSku(index)">删除</el-button>
        <el-button v-if="index==0" type="primary" @click="addProductSku">添加商品版本</el-button>
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
      <el-button type="primary" :loading="hasSubmit" @click="onSubmit('ruleForm')">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import { mapGetters } from 'vuex'
  import configUrl from '../../data/configUrl'
  import { ProductModelBase, ProductModelPrice } from '../../components'
  export default {
    computed: {
      ...mapGetters({
        categoryListFirst: 'getCategoryListFirst',
        categoryListSecond: 'getCategoryListSecond',
        categoryListThird: 'getCategoryListThird'
      })
    },
    components: {
      ProductModelBase,
      ProductModelPrice
    },
    data() {
      return {
        // 表单数据
        ruleForm: {
          productName: '',
          categoryNo: '',
          firstCategoryId: '',
          secondCategoryId: '',
          thirdCategoryId: '',
          brand: '',
          productUnit: '',
          isSynchronize: true,
          safeDays: '',
          pac: '',
          box: '',
          car: '',
          pacCode: '',
          boxCode: '',
          carCode: '',
          productSku: [{
            productVersion: '',
            productCode: ''
          }]
        },
        loadingFirst: false,
        loadingSecond: false,
        disabledSecond: true,
        loadingThird: false,
        disabledThird: true,
        hasSubmit: false,
        // 校验
        rules: {
          productName: [
            { required: true, message: '请填写商品名称', trigger: 'blur' },
          ],
          categoryNo: [
            { required: true, message: '请填写三级分类编码', trigger: 'blur' }
          ],
          brand: [
            { required: true, message: '请填写品牌', trigger: 'blur' }
          ],
          productUnit: [
            { required: true, message: '请填写商品单位', trigger: 'blur' }
          ],
          safeDays: [
            { required: true, message: '请填写保质期天数', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // 提交
      onSubmit(formName) {
        if (this.hasSubmit) {
          return
        }
        this.hasSubmit = true
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            let opt = {
              url: configUrl.productAdd.dataUrl,
              type: 'post',
              data: {

              },
              success: function (resp) {
                _this.hasSubmit = false
                console.log(resp)
              },
              fail: function (resp) {
                _this.hasSubmit=false
                console.log(resp)
              }
            };
            this.$store.dispatch('productAdd', opt)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 新增商品信号
      addProductSku () {
        this.ruleForm.productSku.push({
          productVersion: '',
          productCode: '',
          key: Date.now()
        });
      },
      // 删除商品型号
      removeProductSku (index) {
        if (index !== -1) {
          this.ruleForm.productSku.splice(index, 1)
        }
      },
      remoteFirst () {
        console.log(11)
        let _this = this
        this.loadingFirst = true;
        let opt = {
          url: configUrl.categoryList.dataUrl,
          type: 'get',
          queryType: 'first',
          data: {

          },
          success: function (resp) {
            _this.loadingFirst = false
            _this.disabledSecond = false
            console.log(resp)
          },
          fail: function (resp) {
            _this.loadingFirst=false
            console.log(resp)
          }
        };
        this.$store.dispatch('categoryList', opt)
      },
      remoteSecond () {
        let _this = this
        this.loadingSecond = true;
        let opt = {
          url: configUrl.categoryList.dataUrl,
          type: 'post',
          queryType: 'second',
          data: {

          },
          success: function (resp) {
            _this.loadingSecond = false
            console.log(resp)
          },
          fail: function (resp) {
            _this.loadingSecond=false
            console.log(resp)
          }
        };
        this.$store.dispatch('categoryList', opt)
      },
      remoteThird () {
        let _this = this
        this.loadingThird = true;
        let opt = {
          url: configUrl.categoryList.dataUrl,
          type: 'post',
          queryType: 'third',
          data: {

          },
          success: function (resp) {
            _this.loadingThird = false
            _this.disabledThird = false
            console.log(resp)
          },
          fail: function (resp) {
            _this.loadingThird=false
            console.log(resp)
          }
        };
        this.$store.dispatch('categoryList', opt)
      },
    }
  }
</script>
