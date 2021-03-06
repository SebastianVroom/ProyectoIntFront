import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path:'/auth',
    name:'auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/reservas',
    name:'Reservas',
    component: () => import('../views/Reservas.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
