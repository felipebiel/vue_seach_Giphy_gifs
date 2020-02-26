//chama o arquivo bootstrap.js
require('./bootstrap');

//import do css manualmente
import '../semantic/dist/semantic.min.css'
import './scss/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
