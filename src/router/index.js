import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import Auth from '../views/Auth.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
