<template>
  <div class="p_form">
    <el-form ref="form" :model="form" label-width="100px">
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
            <el-select remote :loading="loadingFirst" clearable @visible-change="remoteFirst" v-model="form.firstCategoryId" placeholder="请选择一级分类">
              <el-option v-for="first in categoryListFirst" :key="first.categoryNo" :label="first.categoryName" :value="first.categoryNo"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="二级分类">
            <el-select remote :loading="loadingSecond" clearable @visible-change="remoteSecond" :disabled="disabledSecond" v-model="form.secondCategoryId" placeholder="请先选择一级分类">
              <el-option v-for="second in categoryListSecond" :key="second.categoryNo" :label="second.categoryName" :value="second.categoryNo"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="三级分类">
            <el-select remote :loading="loadingThird" clearable @visible-change="remoteThird" :disabled="disabledThird" v-model="form.thirdCategoryId" placeholder="请先选择二级分类">
              <el-option v-for="third in categoryListThird" :key="third.categoryNo" :label="third.categoryName" :value="third.categoryNo"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="form.status" clearable placeholder="请选择状态">
              <el-option label="无效" value="0"></el-option>
              <el-option label="有效" value="1"></el-option>
              <el-option label="已删除" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="6">
          <el-form-item label="是否需要同步">
            <el-select clearable v-model="form.isSynchronize" placeholder="请选择是否同步到京东">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="同步状态">
            <el-select clearable v-model="form.syncStatus" placeholder="请选择同步状态">
              <el-option label="未同步" value="0"></el-option>
              <el-option label="同步失败" value="1"></el-option>
              <el-option label="同步成功" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loadingData" icon="search">查询</el-button>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <el-button-group>
      <el-button type="primary" @click="addProduct()" icon="plus">新增</el-button>
      <!--<el-button type="primary" @click="importSalePrice()" icon="upload2">批量导入销售价格</el-button>-->
      <el-button type="primary" @click="importProduct()" icon="upload2">批量导入商品</el-button>
      <!--<el-button type="primary" @click="importVendorPrice()" icon="upload2">批量导入供应商价格</el-button>-->
      <!--<el-button type="primary" @click="exportProduct()" icon="share">批量导出商品信息</el-button>-->
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
        name="file"
        :multiple="false">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过20Mb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="loadingData" @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import configUrl from '../../data/configUrl'
  export default {
    props: {
      loadingData: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      'form.firstCategoryId': function (newVal, oldVal) {
        if (oldVal && newVal != oldVal) {
          this.form.secondCategoryId=''
          this.form.thirdCategoryId=''
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
      'form.secondCategoryId': function (newVal, oldVal) {
        if (oldVal && newVal != oldVal) {
          this.form.thirdCategoryId=''
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
    computed: {
      ...mapGetters({
        categoryListFirst: 'getCategoryListFirst',
        categoryListSecond: 'getCategoryListSecond',
        categoryListThird: 'getCategoryListThird'
      })
    },
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
          status: '',
          isSynchronize: '',
          syncStatus: '',
        },
        title: '',
        action: '',
        dialogFormVisible: false,
        loadingFirst: false,
        hasLoadingFirst: false,
        loadingSecond: false,
        disabledSecond: true,
        hasLoadingSecond: false,
        loadingThird: false,
        disabledThird: true,
        hasLoadingThird: false,
      }
    },
    methods: {
      onSubmit() {
      	if (this.loadingData) {
      		return
        }
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
        this.action=configUrl.importProduct.dataUrl
      },
      importVendorPrice () {
        this.title='批量导入供应商价格'
        this.dialogFormVisible=true
      },
      exportProduct () {

      },
      handleAvatarScucess (response, file, fileList) {
        if (!response.success) {
          this.$refs.upload.clearFiles()
          this.$message({
            showClose: true,
            message: response.msg,
            type: 'error'
          });
          return false
        } else {
          this.dialogFormVisible=false
          this.$refs.upload.clearFiles()
          this.$emit('upload-suc')
        }
      },
      handleAvatarError (err, file, fileList) {
        this.$message({
          showClose: true,
          message: err,
          type: 'error'
        });
        this.$refs.upload.clearFiles()
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
            categoryNo: this.form.firstCategoryId
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
            categoryNo: this.form.secondCategoryId
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
<style scoped>
  .p_form {
    margin-bottom: 10px;
  }
  .up_box {
    text-align: center;
  }
</style>
