import Vue from 'vue'
import store from './vuex/store'
import App from './App.vue'
import router from './router'

const myApp = new Vue({
  store,
  router,
  template: '<App/>',
  components: { App }
});
myApp.$mount('#app');
