import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demoCon',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  // {
  //   path: '/demo2',
  //   name: 'demo2',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/demo2.vue')
  // },
  // {
  //   path: '/demo1',
  //   name: 'demo1',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/demo1.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
