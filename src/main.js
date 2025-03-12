import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js'; // Import Vue Router

const app = createApp(App);

app.use(router); // Use the router
app.mount('#app');
