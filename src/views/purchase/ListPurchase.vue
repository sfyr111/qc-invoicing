<template>
  <div class="padTop_40">
    <!-- 标题 -->
    <pos-head title="采购列表"></pos-head>
    <!-- 采购列表查询 -->
    <list-purchase-form @add-purchase-order="addPurchaseOrder" @on-check="check"></list-purchase-form>

    <!-- tab表格 -->
    <list-purchase-grid @view-detail="viewDetail" :list="getPurchaseOrderList"></list-purchase-grid>

    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      :page-size="checkParams.pageSize"
      :current-page="checkParams.pageNo"
      @current-change="handleCurrentChange"
      :total="totalLimits">
    </el-pagination>
  </div>
</template>

<script>
import { ListPurchaseForm, ListPurchaseGrid, PosHead } from '../../components'
import configUrl from '../../data/configUrl'
import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
			totalLimits: 0,					//总条数
      listUrl: configUrl.listPurchaseUrl.dataUrl,     //  列表查询URL
      isCanCheck: true,                               //  查询按钮节流
      checkParams: {
        serialNumber: '',           //  采购单号
        supplierName: '',          // 供应商名称
        flowStatus: '',            // 审核状态 1.待审核 2.审核通过 3.未通过 4.废弃
        inStatus: '',              // 入库状态 1.未入库 3.已入库
        payStatus: '',            //  付款状态 1.未情况 2.待付款 3.已付款
        startDate: '',            //  建单开始日期
        endDate: '',               //  建单结束日期
        creator: '',               // 制单人
        pageNo: 1,                // 当前页
        pageSize: 10,              //  每页条数
      },
      input: ''                       
		}
	},
	components: {
		ListPurchaseForm,
		ListPurchaseGrid,
    PosHead
	},

  created () {
    //  初始化列表
    this.check(this.checkParams)

    this.username = window.user ? window.user.userName : "用户名"
  },

	methods: {
    //  actions  vuex
    ...mapActions(['purchaseOrderList']),

		//	分页跳转
		handleCurrentChange(val) {
      console.log(55)
	    this.checkParams.pageNo = val

      //  跳转页码 刷新数据
      this.check(this.checkParams)
    },

    //	查看详情
    viewDetail (msg) {
    	console.log(msg)
    	this.$router.push({
    		name: 'listPurchaseDetail',
        query: {
          serialNumber: msg.obj.serialNumber
        }
    	})
    },

    //  新建采购单
    addPurchaseOrder () {
      this.$router.push({
        name: 'addPurchaseOrder'
      })
    },

    //  查询按钮点击
    check (msg) {
      this.checkList(msg, true)
    },

    //  查询列表
    checkList (msg, isCheck) {
      if (!this.isCanCheck) {
        return
      }

      this.isCanCheck = false

      //  查询按钮
      let data = {}
      if (isCheck) {
        let obj = {
          pageNo: 1,
          pageSize: 10
        }
        data = Object.assign(obj, msg)
      }
      //  分页或初始化
      else {
        data = this.checkParams
      }

      let self = this
      let opt = {
        type: 'get',
        url: this.listUrl,
        data: data,
        success: function (res) {
          self.isCanCheck = true
          self.totalLimits = res.data.total
        },
        fail: function (err) {
          self.isCanCheck = true
          self.$message.error('查询列表数据失败')
        }
      }

      this.purchaseOrderList(opt)
    },

    input () {
      console.log(this.input)
    }
	},

  computed: {
    ...mapGetters(['getPurchaseOrderList'])
  }
}
</script>
