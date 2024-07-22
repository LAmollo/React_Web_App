// frontend/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Define the port number
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to the backend server
    },
  },
});
