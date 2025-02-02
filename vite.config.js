import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true,  // Ensures SPA routing for clean URLs
  }
});
