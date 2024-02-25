import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import QuestionEditor from '../views/QuestionEditor.vue';
import QuestionView from '../views/QuestionView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/question/:slug',
    name: 'question',
    component: QuestionView,
    props: true
  },
  {
    path: '/ask/:slug?',
    name: 'question-editor',
    component: QuestionEditor,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
