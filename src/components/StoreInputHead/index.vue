<template>
	<div class="store_input_head">
		<el-form ref="form" :model="form" label-width="100px">
		  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="入库单号：">
		    	    <el-input v-model="form.name"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="入库类型：">
		    	    <el-input v-model="form.name"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="入库仓库：">
			    	<el-select v-model="form.name" placeholder="">
	    	      <el-option label="区域一" value="shanghai"></el-option>
	    	      <el-option label="区域二" value="beijing"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

				<el-col :span="6">
		    	<div>&nbsp;</div>
		    </el-col>
		    
		  </el-row>

  	  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="建单时间：">
			    	<el-select v-model="form.name" placeholder="">
	    	      <el-option label="区域一" value="shanghai"></el-option>
	    	      <el-option label="区域二" value="beijing"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

  	    <el-col :span="6">
      	  <div>&nbsp;</div>
        </el-col>

  			<el-col :span="6" class="btn_container">
      	  <el-form-item label-width="20px">
      	  	<el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="info" @click="addOrder">新建入库单</el-button>
          </el-form-item>
        </el-col>
  	  </el-row>
		</el-form>
	</div>
</template>

<style lang="less">
.store_input_head {
	.btn_container {
		text-align: right;

		.el-button--primary {
			width: 80px;
		}
		.el-form-item__content {
			margin-left: 0;
		}
	}
}
</style>

<script>
export default {
	data () {
		return {
			form: {
				name: ''
			}
		}
	},

	methods: {
		//	查询
		onSubmit () {
			console.log('submit')
		},

		// 新建入库单
		addOrder () {
			this.$emit('add-order')
		}
	}
}
</script>