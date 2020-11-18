import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
    cart: []
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      state.cart.push({
        product,
        quantity
      })
    }
  },
  actions: {
    addProductToCart: ({ commit }, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    }
  },
  modules: {
    authentication
  }
})
