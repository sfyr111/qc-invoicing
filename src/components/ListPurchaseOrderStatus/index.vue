<template>
	<div class="list_purchase_order_status list_purchase_detail_head">
		<h1>
			订单状态
		</h1>

		<div class="content">
			<div class="container">
				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		{{ obj.executeStatus || '&nbsp;' }}
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：{{ obj.executeDate }}
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		{{ obj.inStatus || '&nbsp;' }}
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：{{ obj.inDate || '&nbsp;' }}
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		{{ obj.overRemark || '&nbsp;' }}
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：{{ obj.overDate }}
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		{{ obj.payStatus || '&nbsp;' }}
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：{{ obj.payDate }}
				  	</div>
				  </el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<style lang="less">
.list_purchase_order_status {
	margin: 30px 0;
}
</style>

<script>
export default {
	props: {
		obj: {
			type: Object,
			default: {}
		}
	}
}
</script>