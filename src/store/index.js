import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSnackbarVisible: false
  },
  mutations: {
    changeSnackbarVisibility (state, value) {
      state.isSnackbarVisible = value
    }
  },
  actions: {},
  modules: {
    auth
  }
})
