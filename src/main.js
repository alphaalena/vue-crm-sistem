import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date-filter'
import './assets/index.css'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate/src'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyAesU9M7fLfAvjdOenvPmAUmPleus8GJ5s',
  authDomain: 'vue-crm-sistem-5a2bb.firebaseapp.com',
  databaseURL: 'https://vue-crm-sistem-5a2bb.firebaseio.com',
  projectId: 'vue-crm-sistem-5a2bb',
  storageBucket: 'vue-crm-sistem-5a2bb.appspot.com',
  messagingSenderId: '262213128562',
  appId: '1:262213128562:web:7da5727e5de3ef8b7ccdeb',
  measurementId: 'G-Q8KL2MEDKB'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
