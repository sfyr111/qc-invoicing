<template>
	<div class="list_purchase_detail_head list_purchase_detail_agree">
		<h1>
			<span>
				相关约定
			</span>
		</h1>

		<div class="content">
			<div class="container">
				<el-row>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		交货期限：{{ obj.deliveryDate }}
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		交货仓库：{{ obj.warehouseName }}
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		交货地点：{{ obj.warehouseAddress }}
				  	</div>
				  </el-col>
				</el-row>

				<!-- <el-row>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		付款方式：{{ obj.payMethod }}
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		付款约定：{{ obj.payAppoint }}
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		发票类型：{{ obj.billType }}
				  	</div>
				  </el-col>
				</el-row> -->

				<el-row>
				  <el-col :span="8">
				  	<!-- <div class="grid-content bg-purple">
				  		合同编号：{{ obj.contractCode }}
				  	</div> -->
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		订单有效期：{{ obj.validityDate }}
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		其他约定：{{ obj.remark }}
				  	</div>
				  </el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<style lang="less">
.list_purchase_detail_agree.list_purchase_detail_head{
	margin: 30px 0;

	span:last-child{
		margin-left: 0;
	}
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