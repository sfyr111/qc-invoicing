<template>
	<div class="add_purchase_order">
		<!-- head -->
		<purchase-return-head ref="head"></purchase-return-head>

		<!-- table -->
		<purchase-return-grid ref="tab" @select-pro="selectPro" @remove-pro="removePro" :list="tabData"></purchase-return-grid>

		<!-- 合计 -->
		<add-purchase-total></add-purchase-total>

		<!-- 确认订单填写信息 -->
		<add-purchase-write-msg ref="msg"></add-purchase-write-msg>

		<!-- 确认制单按钮-->
		<div class="confirm_system">
			<el-button type="primary" size="large" @click="confirm">确认制单</el-button>
		</div>


		<!-- 选择商品 -->
		<el-dialog title="选择商品" v-model="isShowSelectProBox" size="large">
		  <select-pro-frame ref="selectPro"></select-pro-frame>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="isShowSelectProBox = false">取 消</el-button>
		    <el-button type="primary" @click="selectProConfirm">确 定</el-button>
		  </span>
		</el-dialog>

	</div>
</template>

<style lang="less">
.add_purchase_order {
	.confirm_system {
		padding-top: 30px;
		text-align: center;
	}
	
	.el-dialog__body {
		padding: 15px;
	}

	.el-dialog--large{
		width: 70%;
	}

	.el-dialog__footer {
		padding: 40px 20px 12px;

		.el-button {
			min-width: 100px;
		}
	}
}
</style>

<script>
import {
	PurchaseReturnHead,
	PurchaseReturnGrid,
	AddPurchaseTotal,
	AddPurchaseWriteMsg,
	SelectProFrame
} from '../../components'
import util from '../../utils/util'

export default {
	data () {
		return {
			tabData: [
			  {
			    date: '2016-05-02',
			    name: '王小虎1',
			    address: '上海市普陀区金沙江路 1518 弄',
			    id: 1
			  },
			  {
			    date: '2016-05-04',
			    name: '王小虎2',
			    address: '上海市普陀区金沙江路 1517 弄',
			    id: 2
			  },
			  {
			    date: '2016-05-01',
			    name: '王小虎3',
			    address: '上海市普陀区金沙江路 1519 弄',
			    id: 3
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎4',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 4
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎5',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 5
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎6',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 6
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎7',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 7
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎8',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 8
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎9',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 9
			  },
			  {
			    date: '2016-05-03',
			    name: '王小虎10',
			    address: '上海市普陀区金沙江路 1516 弄',
			    id: 10
			  }
			],

			isShowSelectProBox: false,			//	是否显示选择商品弹窗
		}
	},
	components: {
		PurchaseReturnHead,
		PurchaseReturnGrid,
		AddPurchaseTotal,
		AddPurchaseWriteMsg,
		SelectProFrame
	},

	methods: {
		//	确定
		confirm () {
			this.$nextTick(function () {
				//console.log(this.$refs.head.form)
				console.log(this.$refs.msg.form)
			})
		},

		//	选择商品弹窗
		selectPro () {
			//console.log('选择商品')
			this.isShowSelectProBox = true
		},

		//	选择商品确定
		selectProConfirm () {
			this.isShowSelectProBox = false

			console.log(this.$refs.selectPro.a)
		},

		//	删除商品
		removePro (msg) {
			//console.log(msg)
			let self = this
			let arr = []
			//	全选
			if (msg.selectAll) {
				this.tabData = []
				this.$refs.tab.multipleSelection = []
			}
			else {
				this.tabData = util.getNewArr(msg.selectArr, this.tabData, 'id')
				console.log(this.tabData)
				this.$refs.tab.multipleSelection = []
			}
		},
	}
}
</script>