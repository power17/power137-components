import { createApp } from 'vue';
import App from './App.vue';
import Button from './button';
// 引入taiwind
import './styles/index.scss';
const app = createApp(App);
app.use(Button).mount('#app');
