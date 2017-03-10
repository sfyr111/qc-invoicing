import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  purchaseOrderList: [],			//	采购单列表
};

// getters
const getters = {
  getPurchaseOrderList: state => state.purchaseOrderList,
}

const actions = {
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
}

const mutations = {
  [types.PURCHASEORDERLIST] (state, data) {
    state.purchaseOrderList = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

