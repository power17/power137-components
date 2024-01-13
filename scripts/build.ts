import path from 'path';

import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
// const vue = require('@vitejs/plugin-vue');
import vueJsx from '@vitejs/plugin-vue-jsx';
// const vueJsx = require('@vitejs/plugin-vue-jsx');
import { fileURLToPath } from 'url';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
// entry
const entryFile = path.resolve(__dirname, './entry.ts');
// output
const outputDir = path.resolve(__dirname, '../build');
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJsx()]
});

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
};

const buildLib = async () => {
  await buildAll();
};
buildLib();
// console.log(111);
