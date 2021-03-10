/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)


// axios
import axios from './axios.js'
Vue.prototype.$http = axios

// Filters
import './filters/filters.js'


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// VeeValidate
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


setInterval(function () {
  if (window.location.pathname !== '/login' && window.location.pathname !== '/queue') {

      if (!localStorage.getItem('token') || localStorage.getItem('token') === null || localStorage.getItem('token') === 'null') {
      router.push('/login').catch(() => {})
    } else {
      axios.post('/api/check-auth',
        {}, {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
      ).then(function (response) {
        store.commit('UPDATE_USER_INFO', {
          displayName: response.data.name,
          email: response.data.email,
          photoURL: response.data.avatar,
          userRole: response.data.role,
          roleName: response.data.role_name,
          uid: response.data.id,
          department: response.data.department,
          counter: response.data.counter
        })
      }).catch(function (error) {
        if (error.response.status === 401) {
          localStorage.setItem('token', null)
          router.push('/login').catch(() => { })
        }
      })
    }
  } else if (router.currentRoute.path === '/login') {

  }
}, 10000)

if (window.location.pathname !== '/login' && window.location.pathname !== '/queue') {
  if (!localStorage.getItem('token') || localStorage.getItem('token') === null || localStorage.getItem('token') === 'null') {
    router.push('/login').catch(() => {})
  } else {
    axios.post('/api/check-auth',
      {}, {
        headers: {
          'Authorization': `Bearer ${  localStorage.getItem('token')}`
        }
      }
    ).then(function (response) {
      store.commit('UPDATE_USER_INFO', {
        displayName: response.data.name,
        email: response.data.email,
        photoURL: response.data.avatar,
        userRole: response.data.role,
        roleName: response.data.role_name,
        uid: response.data.id,
        department: response.data.department,
        counter: response.data.counter
      })
    }).catch(function (error) {
      if (error.response.status === 401) {
        localStorage.setItem('token', null)
        router.push('/login').catch(() => { })
      }
    })
  }
} else if (window.location.pathname === '/login') {

}

