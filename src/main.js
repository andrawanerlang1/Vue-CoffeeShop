import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Toasted from "vue-toasted";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toasted, {
  duration: 10000,
  position: "top-right",
  action: {
    text: "Close",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});
Vue.directive("color", {
  bind(el, binding) {
    el.style.color = binding.value;
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
