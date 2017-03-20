import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  purchaseOrderList: [],					//	采购单列表
  purchaseOrderDetail: {},				//	采购单详情
  purchaseOrderDetailTab: [],        //  采购单详情tab
  supplierList: [],								//	查询供货方列表
  categoryListTree: [],						//	商品分类菜单列表
  purSelectProList: {},						//	新增采购选择商品列表
  addPurWarehouse: [],						//	新增采购单 查询仓库
  addPurchaseOrder: {},						//	新建采购单
};

// getters
const getters = {
	//	采购单列表
  getPurchaseOrderList: state => state.purchaseOrderList,

	//	采购单详情
  getPurchaseOrderDetail: state => state.purchaseOrderDetail,

  //  采购单详情列表
  getPurchaseOrderDetailTab: state => state.purchaseOrderDetailTab,

	//	采购单新增 供货方列表
  getSupplierList: state => state.supplierList,

	//	新增采购单 选择商品 商品分类菜单列表
  getCategoryListTree: state => state.categoryListTree,

  //	新增采购单 选择商品 商品列表
  getPurSelectProList: state => state.purSelectProList,

  //	新增采购单 查询仓库
  getAddPurWarehouse: state => state.addPurWarehouse,

  //	新增采购单
  getAddPurchaseOrder: state => state.addPurchaseOrder,
}

const actions = {
	//	采购单列表
  purchaseOrderList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.PURCHASEORDERLIST, resp.data)
    })
  },

	//	采购单详情
  purchaseOrderDetail ({commit, state}, opt) {
    state.purchaseOrderDetail = {}
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.PURCHASEORDERDETAIL, resp.data)
    })
  },

  //  采购单详情列表
  purchaseOrderDetailTab ({commit, state}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.PURCHASEORDERDETAILTABA, resp.data.rows)
    })
  },

  //	采购单新增 供货方列表
  supplierList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.SUPPERLIERLIST, resp.data)
    })
  },

  //	商品分类菜单列表
  categoryListTree ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.PUCHASECATEGORYLIST, resp.data)
    })
  },

  //	新增采购单 选择商品 商品列表
  purSelectProList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
    	//	添加小计金额  采购数量等信息
    	resp.data.rows.forEach(function (item) {
    		item.purQuantity = 1
    		item.subtotalPrice = item.price
    		item.subtotalPriceNoTax = item.priceNoTax
    	})
      commit(types.PURSELECTPROLIST, resp.data)
    })
  },

  //	新增采购单 查询仓库
  addPurWarehouse ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.ADDPURWAREHOUSE, resp.data)
    })
  },

  //	新增采购单
  addPurchaseOrder ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyCompRequest(params).then(function (resp) {
      commit(types.ADDPURCHASEORDER, resp.data)
    })
  },
}

const mutations = {
	//	采购单列表
  [types.PURCHASEORDERLIST] (state, data) {
    state.purchaseOrderList = data.rows
  },

  //	采购单详情
  [types.PURCHASEORDERDETAIL] (state, data) {
    state.purchaseOrderDetail = data
  },

  //  采购单详情列表
  [types.PURCHASEORDERDETAILTABA] (state, data) {
    state.purchaseOrderDetailTab = data
  },

  //	新增采购单  查询供货方列表
  [types.SUPPERLIERLIST] (state, data) {
    state.supplierList = data.rows
  },

  //	商品分类菜单列表
  [types.PUCHASECATEGORYLIST] (state, data) {
    state.categoryListTree = data
  },

  //	新增采购单 选择商品 商品列表
  [types.PURSELECTPROLIST] (state, data) {
    state.purSelectProList = data
  },

  //	新增采购单 查询仓库
  [types.ADDPURWAREHOUSE] (state, data) {
    state.addPurWarehouse = data
  },

  //	新增采购单
  [types.ADDPURCHASEORDER] (state, data) {
    state.addPurchaseOrder = data
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}

