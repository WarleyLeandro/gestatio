import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import envPlugin from 'vite-plugin-env';

export default defineConfig({
  plugins: [
    react(),
    {
      ...envPlugin,
      enforce: 'pre',
      resolve: (p) => {
        if (p === 'vite-plugin-env') {
          return path.resolve(__dirname, './node_modules/vite-plugin-env/dist/vite-plugin-env.es2019.cjs');
        }
        return null;
      },
    },
  ],
  // outras configurações
});
