import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'
import Category from './modules/Category'
import Vendor from './modules/Vendor'
import Purchase from './modules/Purchase'
import System from './modules/System'
import Storage from './modules/Storage'

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    Product,
    Category,
    Vendor,
    Purchase,
    System,
    Storage
  }
})

export default store
