<template>
	<div class="list_purchase_detail_total">
		<table>
			<tr>
				<td class="total">合计</td>
				<td>
					<em>采购数量</em>
					<div>{{ totalData.totalCount }}</div>
				</td>
				<td>
					<em>含税采购总额</em>
					<div>{{ totalData.totalPrice }}</div>
				</td>
				<td>
					<em>不含税采购总额</em>
					<div>{{ totalData.totalPriceNoTax.toFixed(2) }}</div>
				</td>
				<td class="none">
					<em>采购折扣</em>
					<div>{{ totalData.discountRate }}</div>
				</td>
				<td class="none">
					<em>折扣金额</em>
					<div>{{ totalData.discount }}</div>
				</td>
				<td>
					<em>实际应付金额</em>
					<div>{{ actualPay }}</div>
				</td>
			</tr>
		</table>
	</div>
</template>

<style lang="less">
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
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		totalData: {
			type: Object,
			default: {}
		},
		detail: {
			type: Object,
			default: {}
		}
	},

	data () {
		return {
			//actualPay: ''				//	实付金额
		}
	},

	computed: {
		//	实付金额
		actualPay () {
			return Number(this.totalData.totalPrice) * Number(this.totalData.discountRate ? this.totalData.discountRate : 1) - Number(this.totalData.discount)
		}
	}
}
</script>