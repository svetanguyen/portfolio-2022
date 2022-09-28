import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue';
import WorksPage from '../views/Works/Works.vue';
import AboutPage from '../views/About.vue';
import ContactsPage from '../views/Contacts.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/works",
    name: "Works",
    component: WorksPage,
    meta: {
      title: 'Works'
    }
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      title: 'About'
    }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsPage,
    meta: {
      title: 'Contacts'
    }
  },
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
