<template>
	<div class="purchase_return_head">
				<el-form ref="form" :model="form" :rules="rules" label-width="130px">
				  <el-row :gutter="20">
				    <el-col :span="8">
				    	<el-form-item label="采购方:">
				    	    <el-input v-model="form.buyerCompany" disabled></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="采购方联系人：" prop="principalMan">
				    	    <el-input v-model="form.principalMan"></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8"  class="none">
				    	<el-form-item label="采购方联系电话：" prop="principalManTel">
				    	    <el-input v-model="form.principalManTel"></el-input>
				    	</el-form-item>
				    </el-col>
				  </el-row>

				  <el-row :gutter="20">
				    <el-col :span="8">
  				  	<el-form-item label="供货方：" prop="supplierCompanyName">
					    	<el-select v-model="form.supplierCompanyName" placeholder="请选择供货方" @change="selectSupplier()">
					    		<el-option :label="item.name" :value="item.name" v-for="(item, index) in list" :key="item.name"></el-option>
			    	    </el-select>
			    	  </el-form-item>
  				  </el-col>

				    <el-col :span="8">
				    	<el-form-item label="供货方联系人：">
				    	    <el-input v-model="form.supplierName" readonly></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="供货方联系电话：">
				    	    <el-input v-model="form.supplierPhone" readonly></el-input>
				    	</el-form-item>
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
	
	.el-input__inner, .el-select {
		width: 250px !important;
	}

	.el-input.is-disabled .el-input__inner {
		border: none;
		background: none;
		color: #48576a;
	}

	.el-form-item__label{
		padding: 11px 5px 11px 0;
	}
}
</style>

<script>
import util from '../../utils/util'
export default {
	props: {
		list: {
			type: Array,
			default: []
		}
	},
	data () {
		return {
			form: {
				buyerCompany: '深圳齐采科技有限公司',		
				principalMan: '',			//	采购方联系人
				principalManTel: '',	//	采购方联系电话
				supplierCompany: '',
				supplierName: '',
				supplierPhone: '',
				selectSupplierObj: '',								//		供货方选择对象
				supplierCompanyName: ''								//		供货方公司
			},

			rules: {
				principalMan: [{required: true, message: '请输入联系人', trigger: 'blur'}],
				//principalManTel: [{required: true, message: '请输入联系电话', trigger: 'blur'}],
				supplierCompanyName: [{required: true, message: '请选择供货方', trigger: 'change'}],
			},					//	表单验证
		}
	},

	created () {
		this.principalMan = window.user ? window.user.userName : ''
	},

	methods: {
		//	选择供货方
		selectSupplier () {
			//	获取选中的对象
			this.form.supplierCompany = util.getKeyObj('name', this.list, this.form.supplierCompanyName)
			//console.log(util.getKeyObj(this.form.supplierCompanyName, this.list))
			this.form.supplierName = this.form.supplierCompany.contacts
			this.form.supplierPhone = this.form.supplierCompany.contactsPhone

			//	添加供货方
			this.$emit('select-supplier', this.form.supplierCompany)
		},

		//	表单验证是否可以提交
		checkSubmit () {
			let isSubmit = false
			this.$refs['form'].validate((valid) => {
				if (valid) {
					isSubmit = true 
				}
				else {
					isSubmit = false 
				}
			})

			return isSubmit
		}
	}
}
</script>