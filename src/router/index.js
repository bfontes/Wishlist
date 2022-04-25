import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsView from '../views/Products'
import ProductView from '../views/Product'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductsView,
    meta: {
      breadcrumbs: [
        { name: 'Home'},
      ]
    }
  },
  {
    path: '/lista-de-desejos',
    name: 'Wishlist',
    component: ProductsView,
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
    component: ProductView,
    meta: {
      breadcrumbs: [
        { name: 'Home', link: 'Home'},
        { name: 'produto',},
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
