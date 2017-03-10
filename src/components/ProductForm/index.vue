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
      <el-button type="primary" @click="addProduct()" icon="plus">新增</el-button>
      <el-button type="primary" @click="importSalePrice()" icon="upload2">批量导入销售价格</el-button>
      <el-button type="primary" @click="importProduct()" icon="upload2">批量导入商品</el-button>
      <el-button type="primary" @click="importVendorPrice()" icon="upload2">批量导入供应商价格</el-button>
      <el-button type="primary" @click="exportProduct()" icon="share">批量导出商品信息</el-button>
    </el-button-group>
    <el-dialog class="up_box" :title="title" v-model="dialogFormVisible">
      <el-upload
        ref="upload"
        class="avatar-uploader"
        :action="action"
        :show-file-list="true"
        :on-success="handleAvatarScucess"
        :data="{}"
        :auto-upload="true"
        :on-error="handleAvatarError"
        name="contractFile"
        :multiple="false">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过20Mb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
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
        },
        title: '',
        action: '',
        dialogFormVisible: false
      }
    },
    methods: {
      onSubmit() {
        this.$emit('form-submit', this.form)
      },
      addProduct() {
        this.$emit('add-product')
      },
      importSalePrice () {
      	this.title='批量导入销售价格'
        this.dialogFormVisible=true
      },
      importProduct () {
        this.title='批量导入商品'
        this.dialogFormVisible=true
      },
      importVendorPrice () {
        this.title='批量导入供应商价格'
        this.dialogFormVisible=true
      },
      exportProduct () {

      },
      handleAvatarScucess() {

      },
      handleAvatarError() {

      },
    }
  }
</script>
<style scoped>
  .p_form {
    margin-bottom: 10px;
  }
  .up_box {
    text-align: center;
  }
</style>
