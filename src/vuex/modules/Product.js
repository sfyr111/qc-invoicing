import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  productList: [],
  productFeatureList: [],
  supplierPrice: {},
};

// getters
const getters = {
  getProductList: state => state.productList,
  getProductFeatureList: state => state.productFeatureList,
  getSupplierPrice: state => state.supplierPrice,
}

const actions = {
  productList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.productList=[]
    util.getMyrequest(params).then(function (resp) {
      commit(types.PRODUCT_LIST, resp.data.rows || [])
    })
  },
  productInfo ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data.rows || [])
    })
  },
  productSave ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyCompRequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  productFeatureList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.productFeature=[]
    util.getMyrequest(params).then(function (resp) {
      commit(types.PRODUCT_FEATURE_LIST, resp.data || [])
    })
  },
  supplierPrice ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.supplierPrice={}
    util.getMyrequest(params).then(function (resp) {
      commit(types.SUPPLIER_PRICE, resp.data || {})
    }, function (resp) {
      state.supplierPrice={}
    })
  },
  clrPric ({commit}, opt) {
    state.supplierPrice={}
  },
}

const mutations = {
  [types.PRODUCT_LIST] (state, data) {
    state.productList = data
  },
  [types.PRODUCT_FEATURE_LIST] (state, data) {
    state.productFeatureList = data
  },
  [types.SUPPLIER_PRICE] (state, data) {
    state.supplierPrice = data
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}

