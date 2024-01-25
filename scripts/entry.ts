import ButtonPlugin, { Button } from './../src/button/index';
import TreePlugin, { Tree } from './../src/tree/index';
import { App } from 'vue';
// full installation
const installs = [ButtonPlugin, TreePlugin];
export { Button, Tree };
export default {
  version: '0.0.1',
  install(app: App) {
    installs.forEach((install) => app.use(install));
  }
};
