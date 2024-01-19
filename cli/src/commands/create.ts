import inquirer from 'inquirer';
import { red } from 'kolorist';
const CREATE_TYPES = ['component', 'lib'];
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
};
