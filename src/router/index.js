import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }

  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    meta: { title: 'Grid' },
    component: () => import(/* webpackChunkName: "about" */ '../pages/Grid.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const DEFAULT_TITLE = 'Tweedle';
router.beforeEach((to, from, next) => {
  document.title = DEFAULT_TITLE + " - " + to.meta.title;
  next()
});

export default router
