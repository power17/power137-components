import ButtonPlugin, { Button } from './../src/button/index';
// full installation
const installs = [ButtonPlugin];
export { Button };
export default {
    version: '0.0.1',
    install(app) {
        installs.forEach((install) => app.use(install));
    }
};
//# sourceMappingURL=entry.js.map