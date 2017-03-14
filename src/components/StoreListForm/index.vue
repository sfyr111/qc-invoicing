<template>
	<div class="store_list_form">
		<el-form ref="form" :model="form" label-width="100px">
		  

		  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="商品编号：">
		    	    <el-input v-model="form.name"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="商品名称：">
		    	    <el-input v-model="form.proName"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="一级分类：">
			    	<el-select v-model="form.NO_one_type" placeholder="">
	    	      <el-option label="区域一" value="shanghai"></el-option>
	    	      <el-option label="区域二" value="beijing"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="二级分类：">
			    	<el-select v-model="form.NO_one_type" placeholder="">
	    	      <el-option label="区域一" value="shanghai"></el-option>
	    	      <el-option label="区域二" value="beijing"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>
		  </el-row>

  	  <el-row :gutter="20">
  	    <el-col :span="6">
  	    	<el-form-item label="库存范围：">
  	    	  <el-col :span="11">
		    	    <el-input v-model="form.invRangeStart"></el-input>
  	    	  </el-col>
  	    	  <el-col class="line" :span="2">-</el-col>
  	    	  <el-col :span="11">
  	    	    <el-input v-model="form.invRangeEnd"></el-input>
  	    	  </el-col>
  	    	</el-form-item>
  	    </el-col>

  	    <el-col :span="6">
  	    	<el-form-item label="商品SKU：">
  	    	    <el-input v-model="form.proSKU"></el-input>
  	    	</el-form-item>
  	    </el-col>
  	    <el-col :span="6">
  	    	<el-form-item label="商品69码：">
  	    	    <el-input v-model="form.proSKU"></el-input>
  	    	</el-form-item>
  	    </el-col>
  	    <el-col :span="6">
  	    	<el-form-item label="品牌：">
  	    	    <el-input v-model="form.proSKU"></el-input>
  	    	</el-form-item>
  	    </el-col>
  	  </el-row>

  	  <el-row :gutter="20">
  	    <el-col :span="6">
  	    	<el-form-item label="库存状态：">
  		    	<el-select v-model="form.NO_one_type" placeholder="">
  		    	  <el-option label="全部" value="0"></el-option>
      	      <el-option label="正常" value="1"></el-option>
      	      <el-option label="缺货" value="2"></el-option>
      	    </el-select>
      	  </el-form-item>
  	    </el-col>

  			<el-col :span="18">
      	  <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-col>
  	  </el-row>
		</el-form>
	</div>
</template>

<style lang="less">
.store_list_form{
	.el-form-item__content{
		text-align: right;

		.el-button--primary{
			width: 100px;
		}
	}
}
</style>

<script>
export default {
	data () {
		return {
			form: {
				proNum: '',			//商品编码
				proName: '',		//	商品名称
				NO_one_type: '',		// 一级分类
				NO_two_type: '',		// 二级分类
				invRangeStart: '',		//	库存范围  开始
				invRangeEnd: '',			//	结束
				proSKU: '',						//	商品SKU
			}
		}
	},

	methods: {
		//	查询
		onSubmit () {
			console.log(this.form)
		}
	}
}
</script>