import DefaultTheme from 'vitepress/theme';
import Ellipsis from '../../../src/components/EllipsisText.vue';
import Test from '../../../src/components/Test';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Ellipsis', Ellipsis);
    app.component('Test', Test);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  }
};
