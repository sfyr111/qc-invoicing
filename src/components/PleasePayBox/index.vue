<template>
	<div class="please_pay_box">
		<el-dialog title="请款提示" v-model="isShow">
		  <el-form :model="form">
		    <el-form-item label="请款金额" :label-width="formLabelWidth">
		      <el-input v-model="form.moneyNum" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="cancel">取 消</el-button>
		    <el-button type="primary" @click="confirm">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: {
		showBox: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			formLabelWidth: '120px',
			form: {
				moneyNum: '',      // 	请款金额
			},
			isShow: false,
		}
	},

	methods: {
		cancel () {
			this.$emit('cancel')
		},

		confirm () {
			let msg = {
				form: this.form,
				show: false
			}
			this.$emit('confirm', msg)
		}
	},

	computed: {
		isShow (val) {
			return this.showBox
		}
	}
}
</script>