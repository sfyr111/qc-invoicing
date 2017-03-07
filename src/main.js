// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import './assets/css/common.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
