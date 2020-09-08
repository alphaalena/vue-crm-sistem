import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSnackbarVisible: false,
    isErrorFromServerVisible: false,
    errorFromServer: '',
    error: null
  },
  mutations: {
    changeSnackbarVisibility (state, value) {
      state.isSnackbarVisible = value
    },
    setError (state, error) {
      state.error = error
    },
    // передаем ошибку в state
    clearError (state) {
      state.error = null
    },
    changeErrorFromServerVisible (state, value) {
      state.isErrorFromServerVisible = value
    },
    valueErrorFromServer (state, message) {
      state.errorFromServer = message
    }

  },
  getters: {
    error: state => state.error
  // используем геттерс для того, чтобы получить доступ до данной ошибки
  },
  actions: {},
  modules: {
    auth
  }
})
