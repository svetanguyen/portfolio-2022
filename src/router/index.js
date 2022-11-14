import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: 'Home'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio`;
  next();
})

export default router;
