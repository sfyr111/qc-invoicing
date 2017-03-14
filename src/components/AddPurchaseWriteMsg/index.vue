<template>
	<div class="purchase_return_head add_purchase_write_msg">
				<el-form ref="form" :model="form" :rules="rules" label-width="130px">
				  <el-row :gutter="20">
				    <el-col :span="8">
    		    	<el-form-item label="交货期限：" prop="deliveryDate">
			    	     <el-date-picker
	    	           v-model="form.deliveryDate"
	    	           type="datetime"
	    	           placeholder="选择日期时间">
	    	         </el-date-picker>
    		    	 </el-form-item>
				    </el-col>

				    <el-col :span="8">
  				  	<el-form-item label="交货仓库：" prop="wareHouseName">
					    	<el-select v-model="form.wareHouseName" placeholder="请选择仓库" @change="selectWarehouse">
					    		<el-option v-for="(item, index) in wareHouse" :key="item" :label="item.name" :value="item.name"></el-option>
			    	    </el-select>
			    	  </el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="交货地点:">
				    	    <el-input v-model="form.wareHouse.addr" readonly></el-input>
				    	</el-form-item>
				    </el-col>
				  </el-row>

				  <el-row :gutter="20">
				    <!-- <el-col :span="8">
				      				  	<el-form-item label="付款方式：" prop="payMethod">
				    					    	<el-select v-model="form.payMethod" placeholder="请选择付款方式">
				    					    		<el-option label="网银转账" value="1"></el-option>
				    			    	    </el-select>
				    			    	  </el-form-item>
				      				  </el-col> -->

				    <!-- <el-col :span="8">
				      				  	<el-form-item label="付款约定：">
				    					    	<el-select v-model="form.payAppoint" placeholder="">
				    					    		<el-option label="预付货款" value="0"></el-option>
				    					    		<el-option label="货到付款" value="1"></el-option>
				    					    		<el-option label="分期付款" value="2"></el-option>
				    			    	    </el-select>
				    			    	  </el-form-item>
				      				  </el-col> -->

				    <!-- <el-col :span="8">
				      				  	<el-form-item label="发票类型：" prop="billType">
				    					    	<el-select v-model="form.billType" placeholder="请选择发票类型">
				    					    		<el-option label="增值税专用发票" value="1"></el-option>
				    					    		<el-option label="增值税普通发票" value="2"></el-option>
				    			    	    </el-select>
				    			    	  </el-form-item>
				      				  </el-col> -->
				  </el-row>

				  <el-row :gutter="20">
				    <!-- <el-col :span="8">
				    				  	<el-form-item label="合同编号：">
				  					    	<el-select v-model="form.supplierCompany" placeholder="">
				  					    		<el-option label="网银转账" value="0"></el-option>
				  			    	    </el-select>
				  			    	  </el-form-item>
				    				  </el-col> -->
				    <el-col :span="8">
  				  	<el-form-item label="订单有效期：" prop="validityDate">
			    	     <el-date-picker
	    	           v-model="form.validityDate"
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
  				  		<textarea class="fl" v-model="form.remark"></textarea>
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
import util from '../../utils/util'
export default {
	props: {
		wareHouse: {
			type: Array,
			default: []
		}
	},
	data () {
		return {
			form: {
				deliveryDate: '',				//	交货期限
				wareHouse: '',					//	交货仓库
				wareHouseName: '',			//	交货仓库名	
				payMethod: '',					//	付款方式
				payAppoint: '',					//	付款约定
				remark:  '',				//	其他约定
				billType: '',						//	发票类型
				validityDate: ''				//	订单有效期
			},

			//	验证规则
			rules: {
				deliveryDate: [{ type: 'date', required: true, message: '请选择日期', trigger: 'blur' }],
				wareHouseName: [{ required: true, message: '请选择仓库', trigger: 'change' }],
				//payMethod: [{ required: true, message: '请选择付款方式', trigger: 'change' }],
				//billType: [{ required: true, message: '请选择发票类型', trigger: 'change' }],
				validityDate: [{ type: 'date', required: true, message: '请选择日期', trigger: 'blur' }],
			}
		}
	},

	methods: {
		//	选择仓库
		selectWarehouse () {
			this.form.wareHouse = util.getKeyObj('name', this.wareHouse, this.form.wareHouseName)
		},

		//	填写信息验证
		checkSubmit () {
			let isSubmit = false
			
			this.$refs['form'].validate((valid) => {
        if (valid) {
          isSubmit = true
        } else {
          isSubmit = false
        }
      })

      return isSubmit
		}
	}
}
</script>