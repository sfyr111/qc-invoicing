import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  storageList: [],					//	采购单列表
}

// getters
const getters = {
	//	采购单列表
  getStorageList: state => state.storageList,
}

const actions = {
	//	采购单列表
  storageList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }

    util.getMyrequest(params).then(function (resp) {
      commit(types.STORAGELIST, resp.data)
    })
  },
}

const mutations = {
	//	采购单列表
  [types.STORAGELIST] (state, data) {
    state.storageList = data.rows
  },

}

export default {
  state,
  actions,
  getters,
  mutations
}

