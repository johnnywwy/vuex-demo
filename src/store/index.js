import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, payload) {
      state.count += payload
    }
  },
  actions: {},
  modules: {}
})
