<template>
	<div class="list_purchase_detail_head">
		<h1>
			<span>
				采购单号：{{ obj.serialNumber }}
			</span>
			<span>
				建单日期：{{ obj.createDate }}
			</span>
		</h1>

		<div class="content">
			<div class="container">
				<el-row>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		采购方：深圳齐采科技有限公司
				  	</div>
				  </el-col>
				  
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		采购方联系人：{{ obj.principalMan }}
				  	</div>
				  </el-col>
				 <!--  <el-col :span="8">
				 	<div class="grid-content bg-purple">
				 		采购方联系电话：{{ obj.principalManTel }}
				 	</div>
				 </el-col> -->
				</el-row>

				<el-row>
					<el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		供货方：{{ obj.supplierName }}
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		供货方联系人：{{ obj.contacts }}
				  	</div>
				  </el-col>
				  
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		供货方联系电话：{{ obj.contactsPhone }}
				  	</div>
				  </el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<style lang="less">
.list_purchase_detail_head{
	h1 {
		line-height: 30px;
		padding: 0 15px;
		background: rgba(83, 97, 116, .5);
		font-size: 14px;
		color: #FFF;
		margin: 0;

		span:last-child{
			margin-left: 20px;
		}
	}

	.content {
		background: #fff;
		border: 1px solid #ccc;

		.container{
			padding: 15px 15px 15px 30px;
			width: 860px;
			line-height: 40px;
		}
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