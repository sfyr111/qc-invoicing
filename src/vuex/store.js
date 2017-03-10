import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'
import Category from './modules/Category'
import Vendor from './modules/Vendor'
import Purchase from './modules/Purchase'

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    Product,
    Category,
    Vendor,
    Purchase
  }
});

export default store
