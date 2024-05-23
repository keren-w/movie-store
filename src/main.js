import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import WatchlistView from './views/WatchlistView.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  { path: '/hello', component: HelloWorld },
  { path: '/', component: HomeView },
  { path: '/watchlist', component: WatchlistView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
