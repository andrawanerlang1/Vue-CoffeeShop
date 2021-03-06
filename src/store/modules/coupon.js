import axios from 'axios'

export default {
  state: {
    couponData: [{}],
    couponById: [{}],
    formIdCoupon: {},
    home: 0,
    dine: 0,
    take: 0
  },
  mutations: {
    setCoupon(state, payload) {
      state.couponData = payload
    },
    setCouponById(state, payload) {
      state.CouponById = payload.data
      state.formIdCoupon = payload.data[0]
      // delivery handling untuk jenis delivery ===================
      const deliv = payload.data[0].deliver_id
      if (deliv == 1 || deliv == 4 || deliv == 5 || deliv == 7) {
        state.home = 1
      }
      if (deliv == 2 || deliv == 4 || deliv == 6 || deliv == 7) {
        state.dine = 1
      }
      if (deliv == 3 || deliv == 5 || deliv == 6 || deliv == 7) {
        state.take = 1
      }
    },
    deliverState(state, payload) {
      if (payload == 1) {
        if (state.home == 0) {
          state.home = 1
        } else {
          state.home = 0
        }
      } else if (payload == 2) {
        if (state.dine == 0) {
          state.dine = 1
        } else {
          state.dine = 0
        }
      } else if (payload == 3) {
        if (state.take == 0) {
          state.take = 1
        } else {
          state.take = 0
        }
      } else {
        console.log(payload)
      }
    }
  },
  actions: {
    getCoupons(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/coupon`)
          .then(response => {
            context.commit('setCoupon', response.data.data)
            console.log(response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCouponsById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/coupon/${payload}`)
          .then(response => {
            console.log(response)
            resolve(response)
            context.commit('setCouponById', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    uploadCoupon(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          coupon_name,
          start_date,
          end_date,
          coupon_price,
          coupon_code,
          coupon_desc,
          coupon_discount,
          coupon_image,
          size_id,
          deliver_id
        } = payload
        const data = new FormData()
        data.append('coupon_name', coupon_name)
        data.append('start_date', start_date)
        data.append('end_date', end_date)
        data.append('coupon_price', coupon_price)
        data.append('coupon_code', coupon_code)
        data.append('coupon_desc', coupon_desc)
        data.append('coupon_discount', coupon_discount)
        data.append('coupon_image', coupon_image)
        data.append('deliver_id', deliver_id)
        data.append('size_id', size_id)
        axios
          .post(`https://${process.env.VUE_APP_URL}/coupon`, data)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    updateCoupons(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          coupon_name,
          start_date,
          end_date,
          coupon_price,
          coupon_code,
          coupon_desc,
          coupon_discount,
          coupon_image,
          size_id,
          deliver_id
        } = payload.form
        const data = new FormData()
        data.append('coupon_name', coupon_name)
        data.append('start_date', start_date)
        data.append('end_date', end_date)
        data.append('coupon_price', coupon_price)
        data.append('coupon_code', coupon_code)
        data.append('coupon_desc', coupon_desc)
        data.append('coupon_discount', coupon_discount)
        data.append('coupon_image', coupon_image)
        data.append('deliver_id', deliver_id)
        data.append('size_id', size_id)
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/coupon?id=${payload.id}`,
            data
          )
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    deleteCoupons(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `https://${process.env.VUE_APP_URL}/coupon?id=${context.state.couponData[payload].coupon_id}`
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    delivers(context, payload) {
      return context.commit('deliverState', payload)
    }
  },
  getters: {
    getDataCoupon(state) {
      return state.couponData
    },
    getDataCouponById(state) {
      return state.couponById
    },
    getFormIdCoupon(state) {
      return state.formIdCoupon
    },
    getHomeCoupon(state) {
      return state.home
    },
    getTakeCoupon(state) {
      return state.take
    },
    getDineCoupon(state) {
      return state.dine
    }
  }
}
