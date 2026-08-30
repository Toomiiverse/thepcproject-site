import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thepcproject.com.au',
  trailingSlash: 'always',
  redirects: {
    '/custom-pc-order': '/configurator',
    '/signature-builds': '/custom-pc',
    '/warranty': '/warranty-and-returns',
    '/privacy': '/warranty-and-returns',
    '/privacy-policy': '/warranty-and-returns',
    '/terms': '/terms-and-conditions',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
