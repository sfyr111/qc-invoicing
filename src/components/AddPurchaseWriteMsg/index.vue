<template>
	<div class="purchase_return_head add_purchase_write_msg">
				<el-form ref="form" :model="form" label-width="130px">
				  <el-row :gutter="20">
				    <el-col :span="8">
    		    	<el-form-item label="交货期限：">
			    	     <el-date-picker
	    	           v-model="form.value1"
	    	           type="datetime"
	    	           placeholder="选择日期时间">
	    	         </el-date-picker>
    		    	 </el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="交货仓库：">
				    	    <el-input v-model="form.buyerPhone"></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="交货地点:">
				    	    <el-input v-model="form.buyerCompany" disabled></el-input>
				    	</el-form-item>
				    </el-col>
				  </el-row>

				  <el-row :gutter="20">
				    <el-col :span="8">
  				  	<el-form-item label="付款方式：">
					    	<el-select v-model="form.supplierCompany" placeholder="">
					    		<el-option label="网银转账" value="0"></el-option>
			    	    </el-select>
			    	  </el-form-item>
  				  </el-col>

				    <el-col :span="8">
  				  	<el-form-item label="付款预订：">
					    	<el-select v-model="form.supplierCompany" placeholder="">
					    		<el-option label="预付货款" value="0"></el-option>
					    		<el-option label="货到付款" value="1"></el-option>
					    		<el-option label="分期付款" value="2"></el-option>
			    	    </el-select>
			    	  </el-form-item>
  				  </el-col>

				    <el-col :span="8">
  				  	<el-form-item label="发票类型：">
					    	<el-select v-model="form.supplierCompany" placeholder="">
					    		<el-option label="增值税专用发票" value="0"></el-option>
					    		<el-option label="增值税普通发票" value="1"></el-option>
			    	    </el-select>
			    	  </el-form-item>
  				  </el-col>
				  </el-row>

				  <el-row :gutter="20">
				    <el-col :span="8">
  				  	<el-form-item label="合同编号：">
					    	<el-select v-model="form.supplierCompany" placeholder="">
					    		<el-option label="网银转账" value="0"></el-option>
			    	    </el-select>
			    	  </el-form-item>
  				  </el-col>

				    <el-col :span="8">
  				  	<el-form-item label="订单有效期：">
			    	     <el-date-picker
	    	           v-model="form.value1"
	    	           type="datetime"
	    	           placeholder="选择日期时间">
	    	         </el-date-picker>
    		    	 </el-form-item>
  				  </el-col>

				    <el-col :span="8">
  				  	&nbsp;
  				  </el-col>
				  </el-row>

				  <el-row :gutter="20">
				    <el-col :span="16">
  				  	<div class="clearfix other_agree">
  				  		<span class="fl">其他约定：</span>
  				  		<textarea class="fl" v-model="form.otherArgee"></textarea>
  				  	</div>
  				  </el-col>

				    <el-col :span="8">
  				  	&nbsp;
  				  </el-col>
				  </el-row>
				</el-form>
	</div>
</template>

<style lang="less">
.purchase_return_head {
	font-size: 14px;

	.el-form{
		text-align: left;
	}
	
	.el-input__inner, .el-select, .el-date-editor.el-input {
		width: 250px !important;
	}

	.el-input.is-disabled .el-input__inner {
		border: none;
		background: none;
		color: #48576a;
	}

	.other_agree {
		margin-left: 48px;

		textarea {
			margin-left: 12px;
			width: 60%;
			height: 80px;
			padding: 10px;
			border: 1px solid #bfcbd9;
		}
	}
}
</style>

<script>
export default {
	data () {
		return {
			form: {
				value1: '',				//	交货日期
				buyerCompany: '深圳齐采科技有限公司',		
				buyerName: '',			
				buyerPhone: '',
				supplierCompany: '',
				supplierName: '',
				supplierPhone: '',
				otherArgee:  ''				//	其他约定
			}
		}
	}
}
</script>