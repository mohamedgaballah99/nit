import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

Vue.config.productionTip = false;
// Global Filters
Vue.filter("uppercase", function(v) {
  return v.toUpperCase();
});

Vue.filter("reverse", function(v) {
  return v
    .split("")
    .reverse()
    .join("");
});
// ممكن احط قم مكان المتغيرات
Vue.filter("shorten", function(v, length, suffix) {
  return v.substring(1, length) + suffix;
});

Vue.directive("bold", {
  bind: function(v) {
    v.style.fontWeight = "bold";
  },
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
