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
  themeConfig: { sidebar }
};
export default config;
