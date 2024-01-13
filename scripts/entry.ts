import ButtonPlugin, { Button } from './../src/button/index';
import { App } from 'vue';
// full installation
const installs = [ButtonPlugin];
export { Button };
export default {
  version: '0.1.1',
  install(app: App) {
    installs.forEach((install) => app.use(install));
  }
};
