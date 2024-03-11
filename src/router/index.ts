import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CardsPage from '@/pages/CardsPage.vue';
import WatcherPage from '@/pages/WatcherPage.vue';
import FetchPage from '../pages/FetchPage.vue';
import ComponentsPage from '../pages/ComponentsPage.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsPage
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardsPage
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: WatcherPage
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: FetchPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
