import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true,
  },
  base: '/'
});
