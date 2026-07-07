import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    allowedHosts: ['precisely-hurricane-nitrogen-fitness.trycloudflare.com', 'inn-postcard-decrease-conjunction.trycloudflare.com'],
  },
});
