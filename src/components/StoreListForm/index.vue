<template>
	<div class="store_list_form">
		<el-form ref="form" :model="form" label-width="100px">
		  

		  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="商品编号：">
		    	    <el-input v-model="form.proNum"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="商品名称：">
		    	    <el-input v-model="form.proName"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="一级分类：">
			    	<el-select v-model="form.NO_one_type" placeholder="请选择分类" @change="selectType('one')">
			    		<el-option label="全部" value=""></el-option>
	    	      <el-option :label="item.categoryName" :value="item.categoryNo" v-for="(item, index) in listOne" :key="item.categoryNo"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="二级分类：">
			    	<el-select v-model="form.NO_two_type" placeholder="请选择分类" :disabled="!form.NO_one_type" @change="selectType('two')">
			    		<el-option label="全部" value=""></el-option>
	    	      <el-option :label="item.categoryName" :value="item.categoryNo" v-for="(item, index) in listTwo" :key="item.categoryNo"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>
		  </el-row>

  	  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="三级分类：">
			    	<el-select v-model="form.NO_three_type" placeholder="请选择分类" :disabled="!form.NO_two_type">
			    		<el-option label="全部" value=""></el-option>
	    	      <el-option :label="item.categoryName" :value="item.categoryNo" v-for="(item, index) in listThree" :key="item.categoryNo"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

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
  	    	    <el-input v-model="form.productCode"></el-input>
  	    	</el-form-item>
  	    </el-col>
  	  </el-row>

  	  <el-row :gutter="20">
	  	  <el-col :span="6">
	  	  	<el-form-item label="品牌：">
	  	  	    <el-input v-model="form.brand"></el-input>
	  	  	</el-form-item>
	  	  </el-col>

  	    <el-col :span="6">
  	    	<el-form-item label="库存状态：">
  		    	<el-select v-model="form.status" placeholder="">
  		    	  <el-option label="全部" value=""></el-option>
      	      <el-option label="正常" value="1"></el-option>
      	      <el-option label="缺货" value="0"></el-option>
      	    </el-select>
      	  </el-form-item>
  	    </el-col>

  			<el-col :span="12">
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

		.el-col-2{
			text-align: center;
		}

		.el-button--primary{
			width: 100px;
		}
	}
}
</style>

<script>
export default {
	props: {
		listOne: {
			type: Array,
			default: []
		},
		listTwo: {
			type: Array,
			default: []
		},
		listThree: {
			type: Array,
			default: []
		},
	},
	data () {
		return {
			form: {
				proNum: '',			//商品编码
				proName: '',		//	商品名称
				NO_one_type: '',		// 一级分类
				NO_two_type: '',		// 二级分类
				NO_three_type: '',		// 三级分类
				invRangeStart: '',		//	库存范围  开始
				invRangeEnd: '',			//	结束
				proSKU: '',						//	商品SKU
				productCode: '',			//	商品69码
				brand: '',						//	品牌
				status: ''						//	库存状态
			}
		}
	},

	methods: {
		//	一级分类
		selectType (type) {
			let No_num = ''
			//	选择1级分类
			switch (type) {
				case 'one':
					this.form.NO_two_type = ''
					this.form.NO_three_type = ''
					No_num = this.form.NO_one_type
					break;

				default:
					this.form.NO_three_type = ''
					No_num = this.form.NO_two_type
					break;
			}

			let msg = {
				No_num: No_num,
				type: type
			}
			
			this.$emit('select-type', msg)
		},
		//	查询
		onSubmit () {
			this.$emit('on-check', this.form)
		}
	}
}
</script>