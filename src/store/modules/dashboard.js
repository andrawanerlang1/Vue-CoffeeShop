import axios from "axios";

export default {
  state: {
    yearIncome: "",
    weekOrders: "",
    todayIncome: "",
    monthReport: "",
    URL: process.env.VUE_APP_URL,
  },
  mutations: {
    setYearIncome(state, payload) {
      state.yearIncome = payload;
    },
    setWeekOrders(state, payload) {
      state.weekOrders = payload;
    },
    setTodayIncome(state, payload) {
      state.todayIncome = payload;
    },
    setMonthReport(state, payload) {
      state.monthReport = payload;
    },
    delMonthReport(state) {
      state.monthReport = [];
    },
  },
  actions: {
    getYearIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${context.state.URL}/history/year`)
          .then((result) => {
            context.commit("setYearIncome", result.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    getWeekOrders(context) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${context.state.URL}/history/week`)
          .then((result) => {
            context.commit("setWeekOrders", result.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    getTodayIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${context.state.URL}/history/day`)
          .then((result) => {
            context.commit("setTodayIncome", result.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    getMonthReport(context) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${context.state.URL}/history/month`)
          .then((result) => {
            context.commit("setMonthReport", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
  getters: {
    getYearIncome(state) {
      return state.yearIncome;
    },
    getWeekOrders(state) {
      return state.weekOrders;
    },
    getTodayIncome(state) {
      return state.todayIncome;
    },
    getMonthReport(state) {
      return state.monthReport;
    },
  },
};
