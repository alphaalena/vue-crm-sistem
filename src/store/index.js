import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSnackbarVisible: false,
    isErrorFromServerVisible: false,
    errorFromServer: '',
    error: null,
    isOpenNavigation: false
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
    },
    changeIsOpenNavigation (state, value) {
      state.isOpenNavigation = value
    }

  },
  getters: {
    error: state => state.error
  // используем геттерс для того, чтобы получить доступ до данной ошибки
  },
  actions: {},
  modules: {
    auth,
    info
  }
})
