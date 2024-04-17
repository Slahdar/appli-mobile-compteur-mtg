import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import GameSettings from '../views/GameSettings.vue';
import GamePage from '../views/GamePage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: GameSettings
    },
    {
        path: '/game',
        name: 'Game',
        component: GamePage,
        props: (route) => ({
            mode: route.params.mode,
            players: route.params.players
        })
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
