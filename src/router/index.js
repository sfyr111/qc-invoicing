import Vue from 'vue'
import Router from 'vue-router'
import page from '../views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: page.Index,
      redirect: {name: 'main'},
      children: [
        {
          path: '/main',
          name: 'main',
          component: page.Main
        },
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
