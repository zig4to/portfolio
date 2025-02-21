import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()], // ✅ Vue plugin correctly placed
  css: {
    postcss: {
      plugins: [
        tailwindcss,  // ✅ Tailwind plugin correctly placed
        autoprefixer, // ✅ Autoprefixer correctly placed
      ],
    },
  },
});
