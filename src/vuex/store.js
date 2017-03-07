import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'


Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    Product
  }
});

export default store
