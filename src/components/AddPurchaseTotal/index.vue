<template>
	<div class="list_purchase_detail_total add_purchase_total">
		<table>
			<tr>
				<td class="total">合计</td>
				<td>
					<em>采购数量</em>
					<div>{{ totalPurQuantity }}</div>
				</td>
				<td>
					<em>含税采购总额</em>
					<div>{{ totalPrice.toFixed(2) }}</div>
				</td>
				<td>
					<em>不含税采购总额</em>
					<div>{{ totalPriceNoTaxt.toFixed(2) }}</div>
				</td>
				<td class="none">
					<em>采购折扣</em>
					<el-input v-model="discount" placeholder="请输入折扣" type="number" step="0.01" min="0" max="1" @input="inputDiscount" :disabled="isInputDiscount === 2"></el-input>
				</td>
				<td class="none">
					<em>折扣金额</em>
					<el-input v-model="discountMoney" placeholder="请输入折扣金额" type="number" step="10" min="0" @input="inputDiscountMoney" :disabled="isInputDiscount === 1"></el-input>
				</td>
				<td>
					<em>实际应付金额</em>
					<div>{{ actualPayment.toFixed(2) }}</div>
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
			border: 1px solid #ccc;
			text-align: center;
			padding: 0 !important;
				
			em {
				display: block;
				padding: 10px 0 2px 0;
				font-weight: bold;
			}

			div {
				border-top: 1px solid #ccc;
				height: 30px;
				position: relative;

				.el-input__inner{
					margin: 0 auto;
					width: 70%;
					position: absolute;
					top: 50%;
					left: 50%;
					-webkit-transform: translate3d(-50%, -50%, 0);
					transform: translate3d(-50%, -50%, 0);
					height: 30px;
				}
			}
		}
	}
}
</style>

<script>
export default{
	props: {
		total: {
			type: Array,
			default: []
		}
	},
	data () {
		return {
			discount: 0,					//	折扣
			discountMoney: 0,    //	折扣金额
			isInputDiscount: 0,		//	是输入折扣--1   还是折扣金额--2
			quantity: 0,					//	采购数量
			totalPrice: 0,				//	采购总额（含税）
			totalPriceNoTaxt: 0,		//	采购总额（不含税）
			totalPurQuantity: 0,			//	采购总数量
			actualPayment: 0,					//	实付金额
		}
	},

	created () {
		console.log(this.total)
	},

	methods: {
		//	输入折扣率
		inputDiscount () {
			//console.log(this.discount)
			if (this.discount > 0) {
				this.isInputDiscount = 1
			}
			else {
				this.isInputDiscount = 0
			}

			//	计算实付金额
			this.computedActualPayment(this.isInputDiscount)
		},

		//	输入折扣金额
		inputDiscountMoney () {
			//console.log(this.discountMoney)
			if (this.discountMoney === '') {
				this.discountMoney = 0
			}
			if (this.discountMoney > 0) {
				this.isInputDiscount = 2
			}
			else {
				this.isInputDiscount = 0
			}

			//	计算实付金额
			this.computedActualPayment(this.isInputDiscount)
		},

		//	计算实付金额
		computedActualPayment (status) {
			switch (status) {
				case 0:
					this.actualPayment = this.totalPrice
					break;

				//	折扣率
				case 1:
					this.actualPayment = this.totalPrice * this.discount * 1000 / 1000
					break;

				//	折扣金额
				default:
					this.actualPayment = (this.totalPrice * 1000 - this.discountMoney * 1000) / 1000
					break;
			}
		}
	},

	watch: {
		total (val) {
			//	合计 计算总数量 总价钱（含税和不含税）
			this.totalPurQuantity = 0
			this.totalPrice = 0
			this.totalPriceNoTaxt = 0
			
			for (var i = 0; i < val.length; i ++) {
				if (!val[i].subtotalPrice) {
					continue;
				}

				this.totalPurQuantity += val[i].purQuantity
				this.totalPrice += val[i].subtotalPrice
				this.totalPriceNoTaxt += val[i].subtotalPriceNoTax
			}

			//	计算实付金额
			this.computedActualPayment(this.isInputDiscount)
			
		}
	}
}
</script>