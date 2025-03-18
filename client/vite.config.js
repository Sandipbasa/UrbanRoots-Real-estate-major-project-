import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend server URL
        changeOrigin: true, // Ensures the host header is set to the target URL
        secure: false, // Allows proxying to HTTP (not HTTPS)
      },
    },
  },
  plugins: [react()],
});