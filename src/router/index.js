import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products'
import Product from '../views/Product'
import IdLogin from '../views/IdLogin'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Products,
    meta: {
      breadcrumbs: [
        { name: 'Home'},
      ]
    }
  },
  {
    path: '/external',
    name: 'external',
    component: IdLogin,
    //beforeEnter() {
      //window.location.replace('../views/IdLogin/index.vue');
    //},
    meta: {
      breadcrumbs: [
        { name: 'external', link: 'external'},
        { name: 'Home', link: 'Home'},
      ]
    }
  },
  {
    path: '/lista-de-desejos',
    name: 'Wishlist',
    component: Products,
    meta: {
      breadcrumbs: [
        { name: 'Home', link: 'Home'},
        { name: 'Lista de desejos',},
      ]
    }
  },
  {
    path: '/produto/:sku',
    name: 'Product',
    component: Product,
    meta: {
      breadcrumbs: [
        { name: 'Home', link: 'Home'},
        { name: 'produto',},
      ]
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
