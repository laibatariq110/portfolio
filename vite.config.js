import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', 
  plugins: [react()],
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: './index.html',
    },
  },
});