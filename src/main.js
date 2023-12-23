import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Button from './Button/index.ts';
const app = createApp(App);
app.use(Button).mount('#app');
