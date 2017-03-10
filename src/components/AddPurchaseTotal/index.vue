<template>
	<div class="list_purchase_detail_total add_purchase_total">
		<table>
			<tr>
				<td class="total">合计</td>
				<td>
					<em>采购数量</em>
					<div>1500</div>
				</td>
				<td>
					<em>含税采购总额</em>
					<div>13500</div>
				</td>
				<td>
					<em>不含税采购总额</em>
					<div>1350</div>
				</td>
				<td>
					<em>采购折扣</em>
					<el-input v-model="discount" placeholder="请输入折扣" type="number" step="0.01" min="0" max="1"></el-input>
				</td>
				<td>
					<em>折扣金额</em>
					<el-input v-model="discountMoney" placeholder="请输入折扣金额" type="number" step="10" min="0"></el-input>
				</td>
				<td>
					<em>实际应付金额</em>
					<div>13500</div>
				</td>
			</tr>
		</table>
	</div>
</template>

<style lang="less">
.add_purchase_total {
	margin: 30px 0;
}
.list_purchase_detail_total {
	table {
		width: 100%;
		border-collapse: collapse;
		
		
		.total {
			width: 16%;
			font-weight: bold;
			font-size: 14px;
		}

		td {
			width: 14%;
			padding: 10px 0 15px 0;
			border: 1px solid #ccc;
			text-align: center;
				
			em {
				display: block;
				margin-bottom: 10px;
				font-weight: bold;
			}

			div {
				padding-top: 15px;
				border-top: 1px solid #ccc;

				.el-input__inner{
					margin: 0 auto;
					width: 70%;
				}
			}
		}
	}
}
</style>

<script>
export default{
	data () {
		return {
			discount: 0,					//	折扣
			discountMoney: 0,    //	折扣金额
		}
	}
}
</script>