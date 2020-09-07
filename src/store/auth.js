import firebase from 'firebase/app'

export default {
  state: {
    error: null
  },
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        commit('setError', error)
        throw error
      //  функция производит аунтификацию данных формы, в случае ошибкипередает код ошибки
      }
    },
    async register ({ dispatch, commit }, { email, password, userName }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        // createUserWithEmailAndPassword- метод для создания нового пользователя
        const uad = await dispatch('getUserId')
        // dispatch используем так как обращаемся к actions
        console.log('getUserId', uad)
        if (uad != null) {
          await firebase.database().ref(`/users/${uad}/info`).set({
            bill: 10000,
            name: userName
          })
        }
      //  делаем запись в базе данных и абдейтим нового пользователя с помощью метода ref , в firebase set передаем новые значения,bill -начальный капитал и имя пользователя
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },
    getUserId () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    //    получаем id пользователя, если user не пустой
    }
  },
  mutations: {
    setError (state, error) {
      state.error = error
    }
  }
}
