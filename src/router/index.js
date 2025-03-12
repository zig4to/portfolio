import { createRouter, createWebHistory } from 'vue-router';

// Import your pages
import Home from '../views/Home.vue';
import MoreProjects from '../views/MoreProjects.vue';

const routes = [
  { path: '/', component: Home },  // Homepage
  { path: '/projects', component: MoreProjects }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
