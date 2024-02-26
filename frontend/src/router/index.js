import { createRouter, createWebHistory } from 'vue-router';
import AnswerEditor from '../views/AnswerEditor.vue';
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';
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
  },
  {
    path: '/answer/:uuid',
    name: 'answer-editor',
    component: AnswerEditor,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'page-not-found',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
