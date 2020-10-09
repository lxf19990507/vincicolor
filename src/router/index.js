import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    svg:'',
    component: index
  },
  {
    path:'/pubu',
    component:()=>import('../views/pubu.vue')
  },
  {
    path:'/xianying',
    component:()=>import('../views/xianying.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
