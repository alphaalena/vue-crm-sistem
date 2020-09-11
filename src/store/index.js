import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'

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
  actions: {
    async fetchCurrency () {
      const key = process.env.VUE_APP_FiXER
      const response = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return await response.json()
    //  в акшене fetchCurrency заносим в переменную кеу значение ключа и с помощью нативного метода fetch, который используется для заполнения хранилища перед рендерингом страницы, получаем значения указанных в данном json() валют
    }
  },
  modules: {
    auth,
    info,
    category
  }
})
