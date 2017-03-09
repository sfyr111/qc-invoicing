import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  vendorList: [],
  supplierContractList: [],
};

// getters
const getters = {
  getVendorList: state => state.vendorList,
  getSupplierContractList: state => state.supplierContractList,
}

const actions = {
  vendorList ({commit}, opt) {
    state.vendorList=[]
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.VENDOR_LIST, resp.data.rows||[])
    })
  },
  vendorAdd ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  vendorInf ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  vendorEdit ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  vendorDel ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  contractAdd ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.fileUpload(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  contractEdit ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  contractDel ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      // commit(types.PRODUCT_LIST, resp.data)
    })
  },
  supplierContractList ({commit}, opt) {
    state.supplierContractList=[]
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.SUPPLIER_CONTRACT_LIST, resp.data||[])
    })
  },
}

const mutations = {
  [types.VENDOR_LIST] (state, data) {
    state.vendorList = data
  },
  [types.SUPPLIER_CONTRACT_LIST] (state, data) {
    state.supplierContractList = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

