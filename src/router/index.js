import Vue from 'vue'
import VueRouter from 'vue-router'
// Discovery
const Discovery = () => import('@/page/discovery/index.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'discovery',
    component: Discovery
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
