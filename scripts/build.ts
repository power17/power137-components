import path from 'path';
import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
// entry
const entryFile = path.resolve(__dirname, './entry.ts');
// component entry
const componentsDir = path.resolve(__dirname, '../src');
// output
const outputDir = path.resolve(__dirname, '../build');
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJsx()]
});
// output package.json
const createPackageJson = (name?: string) => {
  const fileStr = `{
   "name": "${name ? name : '@power88/power-ui'}",
   "version": "0.0.3",
   "main": "${name ? 'index.umd.js' : 'power-ui.umd.js'}",
   "module": "${name ? 'index.js' : 'power-ui.js'}",
   "author": "power137",
   "github": "",
   "description": "power UI component ",
   "repository": {
      "type": "git",
      "url": "https://github.com/power17/power137-components.git"
   },
   "keywords": [
      "vue3",
      "组件库",
      "tsx",
      "UI"
   ],
   "license": "MIT",
   "bugs": {
      "url": "https://github.com/power17/power137-components/issues"
   }
}`;
  if (name) {
    fs.writeFileSync(path.resolve(outputDir, `${name}/package.json`), fileStr, {
      encoding: 'utf-8'
    });
  } else {
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), fileStr, {
      encoding: 'utf-8'
    });
  }
};
// full build
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions: {
          external: ['vue', 'vue-router'],
          output: { globals: { vue: 'Vue' }, exports: 'named' }
        },
        lib: {
          entry: entryFile,
          name: 'power-ui',
          fileName: 'power-ui',
          formats: ['es', 'umd', 'cjs']
        },
        outDir: outputDir
      }
    })
  );
  createPackageJson();
};

// single component build
const buildSingle = async (name: string) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions: {
          external: ['vue', 'vue-router'],
          output: { globals: { vue: 'Vue' }, exports: 'named' }
        },
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd', 'cjs']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  );
  createPackageJson(name);
};
const buildLib = async () => {
  await buildAll();
  console.log(fs.readdirSync(componentsDir));
  fs.readdirSync(componentsDir)
    .filter((name) => {
      const componentDir = path.resolve(componentsDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async (name) => {
      await buildSingle(name);
    });
};
buildLib();
