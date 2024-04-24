import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import StartPage from '@/pages/index.vue'
import Favorites from '@/pages/favorites.vue'
import Profile from '@/pages/profile.vue'
import Cart from '@/pages/cart.vue'
import Registration from '@/pages/registration.vue'
import Item from '@/pages/item.vue'
import CurrentProfile from '@/pages/current-profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/merch-website/', component: StartPage },
    { path: '/merch-website/favorites', component: Favorites },
    { name: 'Profile', path: '/merch-website/profile', component: Profile },
    { name: 'CurrentProfile', path: '/merch-website/profile/:user()', component: CurrentProfile },
    { path: '/merch-website/cart', component: Cart },
    { path: '/merch-website/profile/registration', component: Registration },
    { name: 'Item', path: '/merch-website/item/:item()', component: Item, props: true }
  ]
})

createApp(App).use(router).mount('#app')
