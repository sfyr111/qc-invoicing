import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  categoryListFirst: [],
  categoryListSecond: [],
  categoryListThird: [],
};

// getters
const getters = {
  getCategoryListFirst: state => state.categoryListFirst,
  getCategoryListSecond: state => state.categoryListSecond,
  getCategoryListThird: state => state.categoryListThird,
}

const actions = {
  categoryList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      if (opt.queryType == 'first') {
        commit(types.CATEGORY_LIST_FIRST, resp.data || [])
      }
      if (opt.queryType == 'second') {
        commit(types.CATEGORY_LIST_SECOND, resp.data || [])
      }
      if (opt.queryType == 'third') {
        commit(types.CATEGORY_LIST_THIRD, resp.data || [])
      }
    })
  }
}

const mutations = {
  [types.CATEGORY_LIST_FIRST] (state, data) {
    state.categoryListFirst = data
  },
  [types.CATEGORY_LIST_SECOND] (state, data) {
    state.categoryListSecond = data
  },
  [types.CATEGORY_LIST_THIRD] (state, data) {
    state.categoryListThird = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

