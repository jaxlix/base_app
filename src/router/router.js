import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index/index')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/index/search')
    },
    {
      path: '/bookDetail',
      name: 'bookDetail',
      component: () => import('../views/bookDetail/index')
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: () => import('../views/bookshelf/index')
    },
    {
      path: '/reading',
      name: 'reading',
      component: () => import('../views/reading/index')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/mine/index')
    }
  ]
})
