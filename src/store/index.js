import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum(state) {
      return '当前最新的数字[' + state.count + ']'
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, payload) {
      state.count += payload
    },
    sub(state) {
      state.count--
    },
    subN(state, payload) {
      state.count -= payload
    },
  },
  actions: {
    addAsync(content) {
      setTimeout(() => {
        content.commit('add')
      }, 1000)
    },
    addAsyncN(context, payload) {
      setTimeout(() => {
        context.commit('addN', payload)
      }, 1000)
    },
    subAsync(content) {
      setTimeout(() => {
        content.commit('sub')
      }, 1000)
    },
    subAsyncN(content, payload) {
      setTimeout(() => {
        content.commit('subN', payload)
      }, 1000)
    },
  },
})
