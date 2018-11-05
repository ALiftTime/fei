// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./static/js/rem";
import "./static/css/iconfont/iconfont.css";
import "./static/css/reset.css";
// import center from "./center";

Vue.config.productionTip = false
Vue.prototype.common = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
