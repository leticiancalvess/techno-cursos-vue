import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PageLoading from "./components/PageLoading";

Vue.config.productionTip = false;

Vue.component("PageLoading", PageLoading);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
