<template>
	<div class="list_purchase_detail">
		<!-- 采购列表 -->
		<list-purchase-detail-head></list-purchase-detail-head>
		<list-purchase-detail-grid></list-purchase-detail-grid>

		<!-- 合计 -->
		<list-purchase-detail-total></list-purchase-detail-total>

		<!-- 相关约定 -->
		<list-purchase-detail-agree></list-purchase-detail-agree>

		<!-- 入库记录 -->
		<list-purchase-detail-records></list-purchase-detail-records>

		<!-- 订单状态 -->
		<list-purchase-order-status></list-purchase-order-status>

		<!-- 按钮 请款 打印 -->
		<div class="btn">
			<el-button type="info">打印</el-button>
			<el-button type="warning" @click="showPleasePayBox">申请请款</el-button>
		</div>

		<!-- 请款弹窗 -->
		<el-dialog title="请款提示" v-model="isShowPleasePayBox">
		  <el-form :model="form">
		    <el-form-item label="请款金额" :label-width="formLabelWidth">
		      <el-input v-model="form.moneyNum" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="hidePleasePayBox">取 消</el-button>
		    <el-button type="primary" @click="pleasePayBoxConfirm">确 定</el-button>
		  </div>
		</el-dialog>
		
	</div>
</template>

<style lang="less">
.list_purchase_detail {
	.btn {
		text-align: center;
	}

	.el-dialog--small {
		width: 600px;

		.el-form-item {
			width: 400px;
			margin: 0 auto;
		}
	}
}
</style>

<script>
import {
	ListPurchaseDetailHead,
	ListPurchaseDetailGrid,
	ListPurchaseDetailTotal,
	ListPurchaseDetailAgree,
	ListPurchaseDetailRecords,
	ListPurchaseOrderStatus,

} from '../../components'

export default {
	data () {
		return {
			isShowPleasePayBox: false,			//	是否显示请款弹窗
			formLabelWidth: '80px',
			form: {
				moneyNum: ''
			}
		}
	},
	components: {
		ListPurchaseDetailHead,
		ListPurchaseDetailGrid,
		ListPurchaseDetailTotal,
		ListPurchaseDetailAgree,
		ListPurchaseDetailRecords,
		ListPurchaseOrderStatus,

	},

	methods: {
		//	请款弹窗
		showPleasePayBox () {
			this.isShowPleasePayBox = true
		},

		//	取消申请请款
		hidePleasePayBox () {
			this.isShowPleasePayBox = false
		},

		//	申请请款请款确定
		pleasePayBoxConfirm () {
			this.isShowPleasePayBox = false
			console.log(this.form.moneyNum)
		}
	}
}
</script>