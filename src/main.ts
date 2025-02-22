import NaiveUI from 'naive-ui';
import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import {router} from './router';

const app = createApp(App);
app.use(NaiveUI);
app.use(createPinia());
app.use(router);
app.mount('#app');
