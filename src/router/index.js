import Vue from 'vue'
import Router from 'vue-router'
import page from '../views'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: page.Index,
      redirect: {name: 'main'},
      children: [
        {
          path: '/main',
          name: 'main',
          component: page.Main
        },{
          path: '/productList',
          name: 'productList',
          component: page.ProductList,
        },{
          path: '/productModel',
          name: 'productModel',
          component: page.ProductModel
        }/*,{
          path: '/category',
          name: 'category',
          component: page.Category
        }*/,{
          path: '/template',
          name: 'template',
          component: page.Template
        },
        //  库存列表
        {
          path: '/storageList',
          name: 'storageList',
          component: page.StorageList
        },
        //  库存列表详情
        {
          path: '/inventoryDetails',
          name: 'inventoryDetails',
          component: page.InventoryDetails
        },
        //  入库管理
        {
          path: '/storageInput',
          name: 'storageInput',
          component: page.StorageInput
        },
        //  入库管理详情
        {
          path: '/storageInputDetails',
          name: 'storageInputDetails',
          component: page.StorageInputDetails
        },
        //  新增入库单
        {
          path: '/addStorageInput',
          name: 'addStorageInput',
          component: page.AddStorageInput
        },
        //  出库管理
        {
          path: '/storageOutput',
          name: 'storageOutput',
          component: page.StorageOutput
        },
        //  出库管理详情
        {
          path: '/storageOutputDetails',
          name: 'storageOutputDetails',
          component: page.StorageOutputDetails
        },

        {
          path: '/financeList',
          name: 'financeList',
          component: page.FinanceList
        },{
          path: '/reportBai',
          name: 'reportBai',
          component: page.ReportBaiTiao
        },{
          path: '/reportFinance',
          name: 'reportFinance',
          component: page.ReportFinance
        },
        {
          path: '/reportPurchase',
          name: 'reportPurchase',
          component: page.ReportPurchase
        },{
          path: '/reportSale',
          name: 'reportSale',
          component: page.ReportSale
        },{
          path: '/reportStorage',
          name: 'reportStorage',
          component: page.ReportStorage
        },{
          path: '/reportVendor',
          name: 'reportVendor',
          component: page.ReportVendor
        },
        //  采购列表
        {
          path: '/listPurchase',
          name: 'listPurchase',
          component: page.ListPurchase
        },
        //  采购列表详情
        {
          path: '/listPurchaseDetail',
          name: 'listPurchaseDetail',
          component: page.ListPurchaseDetail
        },
        //  退货列表
        {
          path: '/listReturn',
          name: 'listReturn',
          component: page.ListReturn
        },
        //  退货列表详情
        {
          path: '/listReturnDetail',
          name: 'listReturnDetail',
          component: page.ListReturnDetail
        },
        //  新增采购单
        {
          path: '/addPurchaseOrder',
          name: 'addPurchaseOrder',
          component: page.AddPurchaseOrder
        },
        //  新增退货单
        {
          path: '/addReturnOrder',
          name: 'addReturnOrder',
          component: page.AddReturnOrder
        },
        {
          path: '/review',
          name: 'review',
          component: page.Review
        },{
          path: '/vendorList',
          name: 'vendorList',
          component: page.VendorList
        },{
          path: '/vendorAdd',
          name: 'vendorAdd',
          component: page.VendorModel
        },{
          path: '/vendorEdit',
          name: 'vendorEdit',
          component: page.VendorModel
        },{
          path: '/vendorInfo',
          name: 'vendorInfo',
          component: page.VendorModel
        },{
          path: '/userList',
          name: 'userList',
          component: page.UserList
        },{
          path: '/menuList',
          name: 'menuList',
          component: page.MenuList
        },{
          path: '/roleList',
          name: 'roleList',
          component: page.RoleList
        },{
          path: '/deptList',
          name: 'deptList',
          component: page.DeptList
        },
      ]
    },
    //  库存管理
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
