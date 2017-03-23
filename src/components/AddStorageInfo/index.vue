<template>
	<div class="purchase_return_head add_purchase_write_msg add_storage_info">
		<el-form ref="form" label-width="130px">
			<el-row :gutter="20">
		 	 	<el-col :span="8">
	    		<el-form-item label="供应商：">
	    	    <el-input readonly></el-input>
	    		</el-form-item>
	   	 	</el-col>

	   	 	<el-col :span="8">
	    		<el-form-item label="联系人：">
	    	    <el-input readonly></el-input>
	    		</el-form-item>
	   	 	</el-col>

	   	 	<el-col :span="8">
	    		<el-form-item label="联系电话：">
	    	    <el-input readonly></el-input>
	    		</el-form-item>
	   	 	</el-col>
	   	</el-row>

		  <el-row :gutter="20">
		    <el-col :span="16">
			  	<div class="clearfix other_agree">
			  		<span class="fl">其他约定：</span>
			  		<textarea class="fl" v-model="remark"></textarea>
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
.add_storage_info{
	margin: 30px 0;

	.el-form-item__label{
		padding: 11px 12px 11px 0;
	}

	.el-input__inner{
		border: none;
	}
}
</style>

<script>
export default {
	data () {
		return {
			remark: '',			//	备注
		}
	}
}
</script>