import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thepcproject.com.au',
  vite: {
    plugins: [tailwindcss()],
  },
});
