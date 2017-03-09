<template>
	<div class="list_purchase_detail_head">
		<h1>
			<span>
				采购单号：GG-13031-3123123
			</span>
			<span>
				建单日期：2014-09-09  16:31
			</span>
		</h1>

		<div class="content">
			<div class="container">
				<el-row>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		采购方：深圳机顶盒萨科技发货
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		供货方：发哈咖啡萨科技会发生
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		采购方联系人：发哈咖啡萨科技会发生
				  	</div>
				  </el-col>
				</el-row>

				<el-row>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		供货方联系人：深圳机顶盒萨科技发货
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		采购方联系电话：1344234324324
				  	</div>
				  </el-col>
				  <el-col :span="8">
				  	<div class="grid-content bg-purple">
				  		供货方联系电话：1344234324324
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