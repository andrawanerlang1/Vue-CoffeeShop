import axios from 'axios'
import router from '../../router/index'

export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setUserById(state, payload) {
      state.user = payload
    },
    delUser(state) {
      state.user = ''
      state.token = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/login`, payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getUserByIds(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/user/${payload}`)
          .then(result => {
            context.commit('setUserById', result.data.data[0])
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updateUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/${context.state.user.user_id}`,
            payload
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/password/${context.state.user.user_id}`,
            payload
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    forgotPasswords(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/forgot`, payload)
          .then(result => {
            console.log(result)
            resolve(result.data.msg)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    resetPasswords(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/resetPassword`,
            payload
          )
          .then(result => {
            console.log(result)
            resolve(result.data.msg)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    register(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/register`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      context.commit('delUser')
      router.push('/')
    },
    interceptorRequest(context) {
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (
            error.response.data.status === 403 &&
            (error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature' ||
              error.response.data.msg === 'jwt expired' ||
              error.response.data.msg === 'jwt malformed')
          ) {
            context.dispatch('logout')
            alert(error.response.data.msg)
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    setUser(state) {
      return state.user
    },
    isLogin(state) {
      return state.token !== null //jika tidak ada token, isLogin bernilai false
    },
    isAdmin(state) {
      return state.user.user_role !== 1
    }
  }
}
