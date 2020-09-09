import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
      //  мутация setInfo принимает в себя некоторое info
    },
    clearInfo (state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo ({ dispatch, commit }) {
      try {
        const uad = await dispatch('getUserId')
        const ref = await firebase.database().ref(`/users/${uad}/info`).once('value')
        const info = ref.val()
        console.log(info)
        // eslint-disable-next-line no-debugger
        // debugger
        commit('setInfo', info)
        // создаем новую переменную info в которой видим данные пользователя с помощью метода ref указываем путь к которому обращаемся,и с помощью once получаем некоторое value и через метод val получаем значение info которое коммитим
      } catch (error) {
        commit('setError', error)
        throw error
      }
    }
  },
  getters: {
    info: state => state.info,
    isInfoEmpty: state => state.info === null || state.info === undefined || Object.keys(state.info).length === 0
  }
  // используем getters для того, чтобы получить доступ к info, Object.key возвращает массив,длину которого мы проверяем
}
