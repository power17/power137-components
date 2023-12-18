import demoBlockPlugin from 'vitepress-theme-demoblock';
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        {
          text: '按钮',
          link: '/components/button/'
        }
      ]
    }
  ]
};
const config = {
  themeConfig: { sidebar },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin);
    }
  }
};
export default config;
