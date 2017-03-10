<template>
	<div class="purchase_return_head">
				<el-form ref="form" :model="form" label-width="130px">
				  <el-row :gutter="20">
				    <el-col :span="8">
				    	<el-form-item label="采购方:">
				    	    <el-input v-model="form.buyerCompany" disabled></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="采购方联系人：">
				    	    <el-input v-model="form.buyerName"></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="采购方联系电话：">
				    	    <el-input v-model="form.buyerPhone"></el-input>
				    	</el-form-item>
				    </el-col>
				  </el-row>

				  <el-row :gutter="20">
				    <el-col :span="8">
  				  	<el-form-item label="供货方：">
					    	<el-select v-model="form.supplierCompany" placeholder="">
					    		<el-option label="全部" value="0"></el-option>
			    	      <el-option label="已入库" value="1"></el-option>
			    	      <el-option label="未入库" value="2"></el-option>
			    	    </el-select>
			    	  </el-form-item>
  				  </el-col>

				    <el-col :span="8">
				    	<el-form-item label="供货方联系人：">
				    	    <el-input v-model="form.supplierName"></el-input>
				    	</el-form-item>
				    </el-col>

				    <el-col :span="8">
				    	<el-form-item label="供货方联系电话：">
				    	    <el-input v-model="form.supplierPhone"></el-input>
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
}
</style>

<script>
export default {
	data () {
		return {
			form: {
				buyerCompany: '深圳齐采科技有限公司',		
				buyerName: '',			
				buyerPhone: '',
				supplierCompany: '',
				supplierName: '',
				supplierPhone: ''
			}
		}
	}
}
</script>