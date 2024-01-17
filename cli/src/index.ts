import { Command } from 'commander';
import { onCreate } from './commands/create';
const program = new Command();
program
  .command('create')
  .description('创建一个组件模板或配置文件')
  .option('-t --type <type>', `创建类型，可选值：component, lib-entry`)
  .action(onCreate);
program.parse();
