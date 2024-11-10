import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeroesOptionsApiView from '@/views/HeroesOptionsApiView.vue'
import HeroesCompositionApiView from '@/views/HeroesCompositionApiView.vue'
import HeroesView from '@/views/HeroesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/heroes-options-api',
            name: 'heroes-options-api',
            component: HeroesOptionsApiView,
        },
        {
            path: '/heroes-composition-api',
            name: 'heroes-composition-api',
            component: HeroesCompositionApiView,
        },
        {
            path: '/heroes',
            name: 'heroes',
            component: HeroesView,
        },
    ],
})

export default router
