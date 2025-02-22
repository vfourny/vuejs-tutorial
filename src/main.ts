import NaiveUI from 'naive-ui';

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(NaiveUI);
app.mount('#app');
