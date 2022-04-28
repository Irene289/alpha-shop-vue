import Vue from 'vue'
import VueRouter from 'vue-router'
import Alphashop from '../views/Alphashop'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/alphashop'
  },
  {
    path: '/alphashop',
    name: 'alpha-shop',
    component: Alphashop
  },
  {
    path: '/alphashop/:stepName',
    name: 'alpha-shop-checkout',
    component: Alphashop,
    // props: true
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
