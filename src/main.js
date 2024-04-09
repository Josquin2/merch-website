import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import StartPage from '@/pages/index.vue'
import Favorites from '@/pages/favorites.vue'
import Profile from '@/pages/profile.vue'
import Cart from '@/pages/cart.vue'
import Registration from '@/pages/registration.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: StartPage },
    { path: '/favorites', component: Favorites },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/profile/registration', component: Registration }
  ]
})

createApp(App).use(router).mount('#app')
