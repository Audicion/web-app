import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $assets: `${resolve(__dirname, 'src/assets')}`,
      $components: `${resolve(__dirname, 'src/components')}`,
      $stores: `${resolve(__dirname, 'src/stores')}`,
      $utils: `${resolve(__dirname, 'src/utils')}`,
    },
  },
});
