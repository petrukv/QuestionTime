import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import QuestionView from '../views/QuestionView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/question/:slug', // Визначаємо динамічний шлях з параметром :slug
    name: 'question',
    component: QuestionView,
    props: true // Вмикаємо передачу пропсів через параметри маршруту
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
