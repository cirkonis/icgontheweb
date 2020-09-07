import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;
const onePLace = { template: '<div>onePlace</div>' };
const anotherPlace = { template: '<div>anotherPlace</div>' };
const routes = [
  { path: '/onePlace', component: onePLace },
  { path: '/anotherPlace', component: anotherPlace }
];

const router = new VueRouter({
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
