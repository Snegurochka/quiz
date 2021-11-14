import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import Auth from '../views/Auth.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
