import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  productList: [],
};

// getters
const getters = {
  getProductList: state => state.productList,
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

    util.getMyrequest(params).then(function (resp) {
      commit(types.PRODUCT_LIST, resp.data)
    })
  },
  productAdd ({commit}, opt) {
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
  }
}

const mutations = {
  [types.PRODUCT_LIST] (state, data) {
    state.productList = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

