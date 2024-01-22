import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import routes from './routes';

import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);


Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


