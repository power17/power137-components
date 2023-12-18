import DefaultTheme from 'vitepress/theme';
import Ellipsis from '../../../src/components/EllipsisText.vue';
import Test from '../../../src/components/Test';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Ellipsis', Ellipsis);
    app.component('Test', Test);
  }
};
