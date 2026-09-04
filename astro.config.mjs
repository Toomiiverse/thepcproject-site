import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thepcproject.com.au',
  trailingSlash: 'always',
  redirects: {
    '/custom-pc-order': '/configurator',
    '/signature-builds': '/custom-pc',
    '/warranty': '/warranty-and-returns',
    '/privacy-policy': '/privacy',
    '/terms': '/terms-and-conditions',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
