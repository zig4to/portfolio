import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  server: {
    host: "0.0.0.0", // Allows access from external networks (ngrok, LAN, etc.)
    port: 5173, // Default Vite port
    strictPort: true, // Ensures Vite always runs on this port
    allowedHosts: ["e06e-89-142-14-115.ngrok-free.app"], // Replace with your actual ngrok URL
  },
});
