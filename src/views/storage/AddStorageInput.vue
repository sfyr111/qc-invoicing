<template>
	<div class="add_storage_input add_purchase_order">
		<!-- head -->
		<add-storage-head></add-storage-head>

		<!-- tab -->
		<add-storage-grid @select-pro="selectPro"></add-storage-grid>

		<!-- 采购显示信息 -->
		<add-storage-info></add-storage-info>
		
		<!-- 选择商品 -->
		<el-dialog title="选择商品" v-model="isShowSelectProBox" size="large">
		  <storage-select-pro
		  	ref="selectProChild"
		  	:tree-list="treeList"
		  	:tab-data="tabData"
		  	@check-list="confirmCheckSelectProList"
		  	@menu-tree="selectProTreeClick"
		  	@to-page="selectProToPage"
		  >
		  </storage-select-pro>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="isShowSelectProBox = false">取 消</el-button>
		    <el-button type="primary" @click="selectProConfirm">确 定</el-button>
		  </span>
		</el-dialog>


		<!-- 确认入库 -->
		<div class="storage_confirm">
			<el-button type="info">确认入库</el-button>
		</div>
	</div>
</template>

<style lang="less">
.add_storage_input{
	text-align: center;
}
</style>

<script>
import { AddStorageHead, AddStorageGrid, StorageSelectPro, AddStorageInfo } from '../../components'

export default {
	data () {
		return {
			isShowSelectProBox: false,			//	是否显示选择商品弹窗
			treeList: [{
			          label: '一级 1',
			          children: [{
			            label: '二级 1-1',
			            children: [{
			              label: '三级 1-1-1'
			            }]
			          }]
			        }, {
			          label: '一级 2',
			          children: [{
			            label: '二级 2-1',
			            children: [{
			              label: '三级 2-1-1'
			            }]
			          }, {
			            label: '二级 2-2',
			            children: [{
			              label: '三级 2-2-1'
			            }]
			          }]
			        }, {
			          label: '一级 3',
			          children: [{
			            label: '二级 3-1',
			            children: [{
			              label: '三级 3-1-1'
			            }]
			          }, {
			            label: '二级 3-2',
			            children: [{
			              label: '三级 3-2-1'
			            }]
			          }]
			        }],
			tabData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],		
		}
	},
	components: {
		AddStorageHead,
		AddStorageGrid,
		StorageSelectPro,
		AddStorageInfo
	},

	methods: {
		//	选择商品弹窗
		selectPro () {
			this.isShowSelectProBox = true
		},

		//	选择商品  确定查询
		confirmCheckSelectProList () {
			console.log('选择商品确定查询')
		},

		//	选择商品  菜单列表点击
		selectProTreeClick (data) {
			console.log(data)
		},

		//	选择商品点击分页
		selectProToPage (pageNum) {
			console.log(pageNum)
		},

		//	选择商品确定
		selectProConfirm () {
			this.isShowSelectProBox = false
		}
	}
}
</script>