import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  userList: [],
  deptList: [],
  menuList: [],
  roleList: [],
};

// getters
const getters = {
  getUserList: state => state.userList,
  getDeptList: state => state.deptList,
  getMenuList: state => state.menuList,
  getRoleList: state => state.roleList,
}

const actions = {
  userList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.userList=[]
    util.getMyrequest(params).then(function (resp) {
      commit(types.USER_LIST, resp.data.rows || [])
    })
  },
  userSave ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
  deptList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.deptList=[]
    util.getMyrequest(params).then(function (resp) {
      commit(types.DEPT_LIST, resp.data.rows || [])
    })
  },
  deptSave ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
  deptDel ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
  menuList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.menuList=[]
    util.getMyrequest(params).then(function (resp) {
      commit(types.MENU_LIST, resp.data.rows || [])
    })
  },
  menuSave ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
  menuDel ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
  roleList ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    state.roleList=[]
    util.getMyrequest(params).then(function (resp) {
      commit(types.ROLE_LIST, resp.data.rows || [])
    })
  },
  roleSave ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
  roleDel ({commit}, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    util.getMyrequest(params).then(function (resp) {

    })
  },
}

const mutations = {
  [types.USER_LIST] (state, data) {
    state.userList = data
  },
  [types.DEPT_LIST] (state, data) {
    state.deptList = data
  },
  [types.MENU_LIST] (state, data) {
    state.menuList = data
  },
  [types.ROLE_LIST] (state, data) {
    state.roleList = data
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}

