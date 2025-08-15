import { createApp } from 'vue';
import App from './App.vue';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from './utils/Events'
import $pages from './data'
import router from './route';

const app = createApp(App)
app.use(router);
// app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = $pages;
app.provide('$pages', $pages)
app.provide('$bus', $bus)
app.mount('#app')