import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/homeView.vue";
import ProfileView from "@/views/profileView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profiles',
            name: 'profile',
            component: ProfileView
        }
    ]
})

export default router
