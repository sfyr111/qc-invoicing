import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'
import Category from './modules/Category'
import Vendor from './modules/Vendor'

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    Product,
    Category,
    Vendor
  }
});

export default store
