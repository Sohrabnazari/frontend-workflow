import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
// import mpa from 'vite-plugin-mpa'

import path, { resolve } from 'path';
const rootDir = resolve(path.dirname(''));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    // mpa(),
    // ViteRestart({
    //   restart: [
    //     '(postcss|vite).config.[jt]s',
    //   ]
    // }),
    // cssInjectedByJsPlugin(),
    legacy({
      targets: ['defaults', 'ie >= 11'],
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      modernPolyfills: ['es.promise.finally'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    handlebars({
      partialDirectory: [
        resolve(rootDir, 'src/templates'),
        resolve(rootDir, 'src/templates/partials'),
      ],
    }),
  ],
  server: {
    fsServe: {
      root: './' 
    }
  },
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      scss: {
          quietDeps: true,
      },
  },
}
})
