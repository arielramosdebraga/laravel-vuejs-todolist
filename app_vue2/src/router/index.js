import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import VerifyEmailView from '@/views/VerifyEmailView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LayoutAuth from '@/layouts/Auth.vue'
import LayoutDefault from '@/layouts/Default.vue'
import Guard from '@/service/middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    beforeEnter: Guard.redirectIfNotAuthenticated,
    children: [
      { path: '', name: 'index', component: HomeView },
      { path: 'perfil', name: 'profile', component: ProfileView },
    ]
  },
  {
    path: '/login',
    component: LayoutAuth,
    beforeEnter: Guard.redirectIfAuthenticated,
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
  },
  {
    path: '/recuperar-senha',
    component: LayoutAuth,
    children: [
      { path: '', name: 'resetPassword', component: ResetPasswordView },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
