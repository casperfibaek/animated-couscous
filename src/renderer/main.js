import Vue from 'vue';
import vueElectron from 'vue-electron';

import App from './App'; // eslint-disable-line
import router from './router';
import store from './store';


if (!process.env.IS_WEB) { Vue.use(vueElectron); }

// Turn of the tips about using vue in development.
Vue.config.productionTip = false;

window.vue = new Vue({ // eslint-disable-line
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>',
});
