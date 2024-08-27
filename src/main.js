import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Cart from './Cart.vue'
import NotFound from './NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/cart',  component: Cart},
    { path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
