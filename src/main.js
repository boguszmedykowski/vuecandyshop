import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

// Konfiguracja Axios
axios.defaults.baseURL = 'https://127.0.0.1/500';
// axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN';

// Tworzenie aplikacji Vue
const app = createApp(App);

// Dodanie routera do aplikacji
app.use(router);

// Dodanie Axios do globalnych właściwości aplikacji
app.config.globalProperties.$axios = axios;

// Montowanie aplikacji
app.mount('#app');
