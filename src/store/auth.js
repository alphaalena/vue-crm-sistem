import firebase from 'firebase/app'

export default {
  state: {},
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        // throw error
      }
    }
  },
  mutations: {}
}
