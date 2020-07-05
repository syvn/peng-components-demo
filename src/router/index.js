import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        component: () => import('@/components/index'),
    },
    {
        path: '/three',
        component: () => import('@/components/three/index'),
        name: 'three学习',
        children: [
            {
                path: 'point',
                name: '点',
                component: () => import('@/components/three/point'),
            },
        ],
    },
    {
        path: '/d3',
        component: () => import('@/components/d3/index'),
        name: 'd3学习',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
