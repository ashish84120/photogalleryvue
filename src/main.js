import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@morioh/v-lightbox/dist/lightbox.css'
import Lightbox from '@morioh/v-lightbox'
import vuetify from '@/plugins/vuetify' 


Vue.config.productionTip = false
Vue.use(Lightbox)

new Vue({
  router,
  store,
  vuetify,
  components: {
  },
  render: h => h(App)
}).$mount('#app')
