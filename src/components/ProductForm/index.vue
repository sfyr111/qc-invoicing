<template>
  <div class="p_form">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item>
        <el-col :span="20">
          &nbsp;
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="false" icon="search">查询</el-button>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="商品编码">
            <el-input v-model="form.productId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品SKU编码">
            <el-input v-model="form.skuCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品69码">
            <el-input v-model="form.productCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="品牌">
            <el-input v-model="form.brand"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="一级分类">
            <el-select v-model="form.firstCategoryId" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="二级分类">
            <el-select v-model="form.secondCategoryId" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="三级分类">
            <el-select v-model="form.thirdCategoryId" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="form.status" placeholder="请选择活动区域">
              <el-option label="无效" value="0"></el-option>
              <el-option label="有效" value="1"></el-option>
              <el-option label="已删除" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <el-button-group>
      <el-button type="primary" @click="addProduct()"><i class="el-icon-plus"></i>新增</el-button>
      <el-button type="primary"><i class="el-icon-upload2"></i>批量导入销售价格</el-button>
      <el-button type="primary"><i class="el-icon-upload2"></i>批量导入商品</el-button>
      <el-button type="primary"><i class="el-icon-upload2"></i>批量导入供应商价格</el-button>
      <el-button type="primary"><i class="el-icon-share"></i>批量导出商品信息</el-button>
    </el-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          productId: '',
          skuCode: '',
          productCode: '',
          brand: '',
          firstCategoryId: '',
          secondCategoryId: '',
          thirdCategoryId: '',
          status: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$emit('form-submit', this.form)
      },
      addProduct() {
        this.$emit('add-product')
      }
    }
  }
</script>
<style scoped>
  .p_form {
    margin-bottom: 10px;
  }
</style>
