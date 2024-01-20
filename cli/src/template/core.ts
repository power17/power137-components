export const uppercaseFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export function getCoreTemplate(name: string) {
  const compName = 'S' + uppercaseFirst(name);
  const propsTypeName = uppercaseFirst(name) + 'Props';
  const propsName = name + 'Props';
  const propsFileName = name + '-type';
  const className = 's-' + name;
  return `import { defineComponent } from 'vue';
import { ${propsTypeName}, ${propsName} } from './${propsFileName}';
export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}, ctx) {
    return () => {
      return (
        <div class="${className}"></div>
      );
    };
  }
});`;
}
export function genTypesTemplate(name: string) {
  const propsTypeName = uppercaseFirst(name) + 'Props';
  const propsName = name + 'Props';
  return `import type { PropType, ExtractPropTypes } from 'vue'; 
  export const ${propsName} = {};
  export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>; `;
}
export function genStyleTemplate(name: string) {
  return `.s-${name} { /* your component style */ }`;
}

export function getTestTemplate(name: string) {
  return `
  import { render } from '@testing-library/vue' import ${uppercaseFirst(
    name
  )} from '../src/${name}'
  describe('${name} test', () => { 
    test('${name} init render', async () => { 
      const { const { getByRole }= render(${uppercaseFirst(name)}) 
      getByRole('${name}')
    }) 
  }) 
  `;
}

export function getIndexTemplate(name: string) {
  const compName = uppercaseFirst(name);
  return `import { App } from 'vue';
import ${compName} from './src/{name}';
import { installComponent } from '../install';
import type { SheepUIOptions } from '../_utils/global-config';
// 具名导出
export { ${compName}  };
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, ${compName}, options);
  }
};
`;
}
