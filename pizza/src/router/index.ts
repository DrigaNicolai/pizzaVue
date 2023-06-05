import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/index.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: () => import('@/views/restaurant.vue')
    }
  ]
});

export default router;
