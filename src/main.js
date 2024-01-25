import { createApp } from 'vue';
import App from './App.vue';
import powerUI from '../scripts/entry';

import '../build/style.css';
// 引入taiwind
import './styles/index.scss';
const app = createApp(App);
app.use(powerUI).mount('#app');
