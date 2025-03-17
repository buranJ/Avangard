import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      pages: path.resolve(__dirname, './src/pages'),
      hooks: path.resolve(__dirname, './src/hooks'),
      store: path.resolve(__dirname, './src/store'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
      router: path.resolve(__dirname, './src/router'),
      api: path.resolve(__dirname, './src/api')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/styles/variables.scss" as *;`
      }
    }
  }
});
