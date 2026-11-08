import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In development, Vite serves the React app on :5173 and forwards
// any /api request to the Express server running on :8080.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
