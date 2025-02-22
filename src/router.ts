import HomeViewPage from './pages/HomeView.page.vue'
import CounterPage from './pages/Counter.page.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: HomeViewPage},
    {path: '/counter', component: CounterPage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})