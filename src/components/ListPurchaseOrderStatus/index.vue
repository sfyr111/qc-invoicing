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
				  		已确认下单
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：2017-01-01 15:00
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		部分入库
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：2017-01-01 15:00
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		订单完结
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：2017-01-01 15:00
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		财务已付款
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="grid-content bg-purple">
				  		时间：2017-01-01 15:00
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