import { createRouter, createWebHashHistory } from 'vue-router';

// Import your pages
import HomePage from '../views/Home.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/:catchAll(.*)', redirect: '/' }, // Redirect unknown routes to home
];

const router = createRouter({
  history: createWebHashHistory(), // ✅ Use hash mode for GitHub Pages compatibility
  routes
});

export default router;
