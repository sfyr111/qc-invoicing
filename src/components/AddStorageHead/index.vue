<template>
	<div class="add_storage_head">
			<el-form ref="form" :model="form" label-width="100px">
			  <el-row :gutter="20">
			    <el-col :span="6">
			    	<el-form-item label="入库类型：">
				    	<el-select v-model="form.type" placeholder="">
		    	      <el-option label="采购入库" value="0"></el-option>
		    	      <el-option label="其他入库" value="1"></el-option>
		    	    </el-select>
		    	  </el-form-item>
			    </el-col>

			    <el-col :span="6">
			    	<el-form-item label="入库仓库：">
				    	<el-select v-model="form.warehouse" placeholder="">
				    		<el-option label="南山仓" value="0"></el-option>
		    	      <el-option label="科苑仓" value="1"></el-option>
		    	      <el-option label="罗湖仓" value="2"></el-option>
		    	    </el-select>
		    	  </el-form-item>
			    </el-col>

			    <el-col :span="6">
			    	<el-form-item label="采购单号：">
				    	<el-select v-model="form.warehouse" placeholder="">
				    		<el-option label="22222" value="0"></el-option>
		    	      <el-option label="3333" value="1"></el-option>
		    	      <el-option label="44444" value="2"></el-option>
		    	    </el-select>
		    	  </el-form-item>
			    </el-col>

			    <el-col :span="6">
			    	<div>&nbsp;</div>
			    </el-col>
			  </el-row>
			</el-form>
	</div>
</template>

<script>
export default {
	data () {
		return {
			form: {
				type: '',
				warehouse: '',
				proNum: ''
			}
		}
	}
}
</script>