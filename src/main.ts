import './assets/main.css'
import NaiveUI from 'naive-ui';
import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';

const app = createApp(App);
app.use(NaiveUI);
app.use(createPinia());
app.mount('#app');
