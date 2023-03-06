import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import ForgotPasswordView from '../views/ForgotPassword.vue'
import LayoutAuth from '@/layouts/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: LayoutAuth,
    children: [
      { path: '', name: 'login', component: LoginView },
    ]
  },
  {
    path: '/registro',
    component: LayoutAuth,
    children: [
      { path: '', name: 'register', component: RegisterView },
    ]
  },
  {
    path: '/verificar-email',
    component: LayoutAuth,
    children: [
      { path: '', name: 'verifyEmail', component: VerifyEmailView },
    ]
  },
  {
    path: '/esqueci-senha',
    component: LayoutAuth,
    children: [
      { path: '', name: 'forgotPassword', component: ForgotPasswordView },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
