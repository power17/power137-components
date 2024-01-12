import DefaultTheme from 'vitepress/theme';
import Ellipsis from '../../../src/components/EllipsisText.vue';
import { Button } from '../../../src/button/index.ts';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // show code component
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
    // custom components
    app.component('Ellipsis', Ellipsis);
    app.component(Button.name, Button);
  }
};
