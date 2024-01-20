import path from 'path';
import fsExtra from 'fs-extra';
import { lightBlue, lightGreen } from 'kolorist';
import {
  getCoreTemplate,
  genTypesTemplate,
  genStyleTemplate,
  getTestTemplate,
  getIndexTemplate
} from '../template/core.ts';
const { ensureDirSync, writeFileSync } = fsExtra;
interface MetaType {
  name: string;
  title: string;
  categroty: string;
}
export function createComponent(meta: MetaType) {
  const componentDir = path.resolve('../src', meta.name);
  const componentSrcDir = path.resolve(componentDir, 'src');
  const componentStyleDir = path.resolve(componentDir, 'style');
  const componentTestDir = path.resolve(componentDir, 'test');
  ensureDirSync(componentSrcDir);
  ensureDirSync(componentStyleDir);
  ensureDirSync(componentTestDir);
  // create core component
  const coreFilePath = path.resolve(componentSrcDir, meta.name) + '.tsx';
  writeFileSync(coreFilePath, getCoreTemplate(meta.name), {
    encoding: 'utf-8'
  });
  // create type component
  const typesFilePath = path.resolve(componentSrcDir, meta.name + '-type.ts');
  writeFileSync(typesFilePath, genTypesTemplate(meta.name), {
    encoding: 'utf-8'
  });

  // 样式文件
  const styleFilePath = componentStyleDir + `/${meta.name}.scss`;
  writeFileSync(styleFilePath, genStyleTemplate(meta.name), {
    encoding: 'utf-8'
  });

  // 测试文件
  const testFilePath = componentTestDir + `/${meta.name}.test.ts`;
  writeFileSync(testFilePath, getTestTemplate(meta.name), {
    encoding: 'utf-8'
  });

  const indexFilePath = componentDir + `/index.ts`;
  writeFileSync(indexFilePath, getIndexTemplate(meta.name), {
    encoding: 'utf-8'
  });

  console.log(
    lightGreen(
      `✔ The component "${meta.name}" directory has been generated success`
    )
  );
  console.log(lightBlue(`✈ Target directory: ${componentDir}`));
}
