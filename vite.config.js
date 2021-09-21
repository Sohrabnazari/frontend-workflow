import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
// import mpa from 'vite-plugin-mpa'

import path, { resolve } from 'path';
const rootDir = resolve(path.dirname(''));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    // mpa(),
    handlebars({
      //partialDirectory: resolve(rootDir, 'partials'),
      partialDirectory: [
        // resolve(rootDir, 'src/templates'),
        resolve(rootDir, 'src/templates/partials'),
        resolve(rootDir, 'src/templates/component'),
      ],
    }),
  ],
  server: {
    fsServe: {
      root: './' 
    }
  }
})
