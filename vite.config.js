import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // JavaScript minification
    terserOptions: {
      compress: {
        drop_console: true, // remove console logs
      },
    },
    cssCodeSplit: true, // Enable CSS code splitting
  },
});
