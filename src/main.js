import { createApp } from 'vue';
import App from './App.vue';
import PowerUI from '../build/button';
import '../build/style.css';
// 引入taiwind
import './styles/index.scss';
const app = createApp(App);
app.use(PowerUI).mount('#app');
