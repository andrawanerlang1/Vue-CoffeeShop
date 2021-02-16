import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/auth";
import Product from "./modules/product";
import Coupon from "./modules/coupon";
import History from "./modules/history";
import dashboard from "./modules/dashboard";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Auth, Product, Coupon, History, dashboard },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ["Auth.user", "Product.cart", "dashboard.monthReport"],
    }),
  ],
});
