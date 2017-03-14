<template>
  <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="100px">
    <el-form-item label="商品名称" prop="productName">
      <el-input v-model="ruleForm.productName" placeholder="请填写商品名称"></el-input>
    </el-form-item>
    <el-form-item label="商品分类" prop="categoryNo">
      <el-col :span="8">
        <el-select remote :loading="loadingFirst" @visible-change="remoteFirst" v-model="ruleForm.firstCategoryId" placeholder="请选择一级分类">
          <el-option v-for="first in categoryListFirst" :key="first.categoryNo" :label="first.categoryName" :value="first.categoryNo"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select remote :loading="loadingSecond" @visible-change="remoteSecond" :disabled="disabledSecond" v-model="ruleForm.secondCategoryId" placeholder="请选择二级分类">
          <el-option v-for="second in categoryListSecond" :key="second.categoryNo" :label="second.categoryName" :value="second.categoryNo"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select remote :loading="loadingThird" @visible-change="remoteThird" :disabled="disabledThird" v-model="ruleForm.categoryNo" placeholder="请选择三级分类">
          <el-option v-for="third in categoryListThird" :key="third.categoryNo" :label="third.categoryName" :value="third.categoryNo"></el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="品牌" prop="brand">
      <el-input v-model="ruleForm.brand" placeholder="请填写品牌"></el-input>
    </el-form-item>
    <el-form-item label="商品单位" prop="unitCn">
      <el-input v-model="ruleForm.unitCn" placeholder="请填写商品单位"></el-input>
    </el-form-item>
    <el-form-item label="商品同步京东">
      <el-select v-model="ruleForm.isSynchronize" placeholder="请选择是否同步">
        <el-option label="是" value="Y"></el-option>
        <el-option label="否" value="N"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="保质期天数" prop="safeDays" placeholder="请填写保质期">
      <el-input v-model="ruleForm.safeDays"></el-input>
    </el-form-item>
    <el-form-item
      v-for="(product, index) in ruleForm.productSku"
      label="商品69码"
      :key="product.key"
      :prop="'productSku.' + index + '.productCode'" :rules="{
        required: true, message: '商品69码', trigger: 'blur'
      }">
      <el-col :span="7">
        <el-input v-model="product.productCode"></el-input>
      </el-col>
      <el-col class="line" :span="4">商品版本</el-col>
      <el-col :span="7">
        <el-input v-model="product.productVersion"></el-input>
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
    props: {
      productId: {
        type: String
      }
    },
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
          unitCn: '',
          isSynchronize: 'Y',
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
        hasLoadingFirst: false,
        loadingSecond: false,
        disabledSecond: true,
        hasLoadingSecond: false,
        loadingThird: false,
        disabledThird: true,
        hasLoadingThird: false,
        hasSubmit: false,
        saveId: '',
        // 校验
        rules: {
          productName: [
            { required: true, message: '请填写商品名称', trigger: 'blur' },
          ],
          categoryNo: [
            { required: true, message: '请选择三级分类编码', trigger: 'blur' }
          ],
          brand: [
            { required: true, message: '请填写品牌', trigger: 'blur' }
          ],
          unitCn: [
            { required: true, message: '请填写商品单位', trigger: 'blur' }
          ],
          safeDays: [
            { required: true, message: '请填写保质期天数', trigger: 'blur' }
          ]
        }
      }
    },
    watch: {
      'ruleForm.firstCategoryId': function (newVal, oldVal) {
        if (oldVal && newVal != oldVal) {
          this.ruleForm.secondCategoryId=''
          this.ruleForm.thirdCategoryId=''
          this.disabledThird=true
          this.hasLoadingSecond=false
        }
        if (newVal) {
          this.disabledSecond = false
        }
        if (!newVal) {
          this.disabledSecond = true
          this.disabledThird = true
        }
      },
      'ruleForm.secondCategoryId': function (newVal, oldVal) {
        if (oldVal && newVal != oldVal) {
          this.ruleForm.thirdCategoryId=''
          this.hasLoadingThird=false
        }
        if (newVal) {
          this.disabledThird = false
        }
        if (!newVal) {
          this.disabledThird = true
        }
      }
    },
    created () {
    	if (this.productId) {
        this.initForm()
      }
    },
    methods: {
    	initForm () {
    		let _this = this
    		let opt = {
    			url: configUrl.productDetail.dataUrl,
          type: 'get',
          data: {
            productId: this.productId
          },
          success: function (resp) {
            _this.ruleForm.productId=resp.data.productId
            _this.ruleForm.productName=resp.data.productName
            _this.ruleForm.brand=resp.data.brand
            _this.ruleForm.unitCn=resp.data.unitCn
            _this.ruleForm.pac=resp.data.pac
            _this.ruleForm.box=resp.data.box
            _this.ruleForm.car=resp.data.car
            _this.ruleForm.pacCode=resp.data.pacCode
            _this.ruleForm.boxCode=resp.data.boxCode
            _this.ruleForm.carCode=resp.data.carCode
            _this.ruleForm.productSku=resp.data.productSKU
            _this.ruleForm.safeDays=resp.data.safeDays
            _this.remoteFirst(true)
            _this.ruleForm.firstCategoryId=resp.data.firstCategoryId
            _this.remoteSecond(true)
            _this.ruleForm.secondCategoryId=resp.data.secondCategoryId
            _this.remoteThird(true)
            _this.ruleForm.categoryNo=resp.data.thirdCategoryId
          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        }
        this.$store.dispatch('productInfo', opt)
      },
      // 提交
      onSubmit(formName) {
        if (this.hasSubmit) {
          return
        }
        let _this = this
        let data = {
          productName: this.ruleForm.productName,
          categoryNo: this.ruleForm.categoryNo,
          brand: this.ruleForm.brand,
          unitCn: this.ruleForm.unitCn,
          isSynchronize: this.ruleForm.isSynchronize,
          safeDays: this.ruleForm.safeDays,
          pac: this.ruleForm.pac,
          box: this.ruleForm.box,
          car: this.ruleForm.car,
          pacCode: this.ruleForm.pacCode,
          boxCode: this.ruleForm.boxCode,
          carCode: this.ruleForm.carCode,
          productSku: this.ruleForm.productSku,
        }
        let url = configUrl.productAdd.dataUrl
        if (this.productId) {
          url = configUrl.productEdit.dataUrl
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.hasSubmit = true
            let opt = {
              url: url,
              type: 'post',
              data: data,
              success: function (resp) {
                _this.hasSubmit = false
                _this.$emit('submit-suc')
                console.log(resp)
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
            this.$store.dispatch('productSave', opt)
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
      remoteFirst (show) {
        if (!show) {
        	return
        }
        if (this.hasLoadingFirst) {
        	return
        }
        let _this = this
        this.loadingFirst = true;
        let opt = {
          url: configUrl.categoryList.dataUrl,
          type: 'post',
          queryType: 'first',
          data: {
            categoryNo: 0
          },
          success: function (resp) {
            _this.loadingFirst = false
            _this.hasLoadingFirst = true
          },
          fail: function (resp) {
            _this.loadingFirst=false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
        this.$store.dispatch('categoryList', opt)
      },
      remoteSecond (show) {
      	if (!show) {
      		return
        }
        if (this.hasLoadingSecond) {
      		return
        }
        let _this = this
        this.loadingSecond = true;
        let opt = {
          url: configUrl.categoryList.dataUrl,
          type: 'post',
          queryType: 'second',
          data: {
            categoryNo: this.ruleForm.firstCategoryId
          },
          success: function (resp) {
            _this.loadingSecond = false
            _this.hasLoadingSecond = true
          },
          fail: function (resp) {
            _this.loadingSecond=false
            _this.hasLoadingSecond = false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
        this.$store.dispatch('categoryList', opt)
      },
      remoteThird (show) {
      	if (!show) {
      		return
        }
        if (this.hasLoadingThird) {
      		return
        }
        let _this = this
        this.loadingThird = true;
        let opt = {
          url: configUrl.categoryList.dataUrl,
          type: 'post',
          queryType: 'third',
          data: {
            categoryNo: this.ruleForm.secondCategoryId
          },
          success: function (resp) {
            _this.loadingThird = false
            _this.disabledThird = false
            _this.hasLoadingThird=true
            console.log(resp)
          },
          fail: function (resp) {
            _this.loadingThird=false
            _this.hasLoadingThird=false
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
          }
        };
        this.$store.dispatch('categoryList', opt)
      },
    }
  }
</script>
