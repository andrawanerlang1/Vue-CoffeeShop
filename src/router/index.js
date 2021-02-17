import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Lifecycle from '../views/Lifecycle.vue'
import ProductDetail from '../views/productDetail.vue'
import Cart from '../views/cart.vue'
import PostProduct from '../views/PostProduct.vue'
import PostCoupon from '../views/PostCoupon.vue'
import Search from '../views/search.vue'
import History from '../views/history.vue'
import Update from '../views/update.vue'
import UpdateCoupon from '../views/updateCoupon.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import EditProfile from '../views/auth/editProfile.vue'
import Dashboard from '../views/dashboard.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresVisitor: true }
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update,
    meta: { requiresAdmin: true }
  },
  {
    path: '/updateCoupon/:id',
    name: 'UpdateCoupon',
    component: UpdateCoupon,
    meta: { requiresAdmin: true }
  },
  {
    path: '/PostProduct',
    name: 'PostProduct',
    component: PostProduct,
    meta: { requiresAdmin: true }
  },
  {
    path: '/PostCoupon',
    name: 'PostCoupon',
    component: PostCoupon,
    meta: { requiresAdmin: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAdmin: true }
  },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: ResetPassword
  },
  {
    path: '/productDetail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: Lifecycle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (store.getters.isAdmin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
