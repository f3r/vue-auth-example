import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import CheckAvailableRooms from '../views/CheckAvailableRooms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/checkAvailableRooms',
      name: 'checkAvailableRooms',
      component: CheckAvailableRooms,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

import { useAuthStore } from '../stores/store'

router.beforeEach((to,_,next)=> {

  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
