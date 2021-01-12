import axios from 'axios'

export default {
  state: {
    historyId: null,
    historyAcc: []
  },
  mutations: {
    setHistoryId(state, payload) {
      state.historyId = payload
    },
    setHistoryAcc(state, payload) {
      state.historyAcc = payload
    }
  },
  actions: {
    createHistory(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_URL}/history`, payload)
          .then(response => {
            context.commit('setHistoryId', response.data.data.history_id)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    createHistoryDetail(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const setData = {
          history_id: context.state.historyId,
          product_id: payload.product_id,
          size_choice_id: payload.product_size,
          deliver_id: payload.product_deliver,
          history_detail_quantity: payload.product_qty,
          history_detail_total: payload.product_total
        }
        console.log(setData)
        axios
          .post(`http://${process.env.VUE_APP_URL}/historydetail`, setData)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getHistoryAcc(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/history?user_id=${payload}`)
          .then(response => {
            context.commit('setHistoryAcc', response.data.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  getters: {
    getHistoryId(state) {
      return state.historyId
    },
    getHistoryByUserId(state) {
      return state.historyAcc
    }
  }
}
