import { red } from 'kolorist';
import inquirer from 'inquirer';
import { createComponent } from '../shared/create-component.ts';

const CREATE_TYPES = ['component', 'lib'];
// 文档分类
const DOCS_CATEGORIES = [
  '通用',
  '导航',
  '反馈',
  '数据录入',
  '数据展示',
  '布局'
];
export const onCreate = async (cmd: { [key: string]: string }) => {
  let { type } = cmd;
  if (!type) {
    const result = await inquirer.prompt([
      {
        name: 'type',
        message: '必填）请选择创建类型:',
        choices: CREATE_TYPES,
        default: 0 // CREATE_TYPE index
      }
    ]);
    type = result.type;
  }
  if (!CREATE_TYPES.includes(type)) {
    console.log(
      red(
        `当前类型仅支持：${CREATE_TYPES.join(
          ', '
        )}，收到不在支持范围内的 "${type}"`
      )
    );
  }
  // 分类
  switch (type) {
    case 'component':
      const info = await inquirer.prompt([
        {
          name: 'name',
          type: 'input',
          message: '（必填）请输入组件 name ，将用作目录及文件名：',
          validate: (value: string) => {
            if (value.trim() === '') {
              return '组件 name 是必填项！';
            }
            return true;
          }
        },
        {
          name: 'title',
          type: 'input',
          message: '（必填）请输入组件中文名称，将用作文档列表显示:',
          validate: (value: string) => {
            if (value.trim() === '') {
              return '组件名称是必填项';
            }
            return true;
          }
        },
        {
          name: 'category',
          type: 'list',
          choices: DOCS_CATEGORIES,
          message: '(必填)请选择组件分类，将用作文档列表分类:',
          default: 0
        }
      ]);
      createComponent(info);
      break;
    case 'lib-entry':
      createLibEntry();
      break;
  }
};

function createLibEntry() {
  console.log('lib');
}
