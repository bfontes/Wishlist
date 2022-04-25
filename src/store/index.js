import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlist: [],
    products: [],
    product: {},
  },

  getters: {
    getProduct: (localState) => localState.product,
    getProducts: (localState) => localState.products,
    getWishlist: (localState) => localState.wishlist,
  },

  mutations: {
    SET_WISHLIST: (localState, payload) => {
      localState.wishlist = payload;
    },
    SET_PRODUCTS: (localState, payload) => {
      localState.products = payload;
    },
    SET_PRODUCT: (localState, payload) => {
      localState.product = payload;
    },
  },
  
  actions: {
    setWishlist: ({commit}, payload) => commit('SET_WISHLIST', payload),
    setProducts: ({commit}, payload) => commit('SET_PRODUCTS', payload),
    setProduct: ({commit}, payload) => commit('SET_PRODUCT', payload),
  },
})
