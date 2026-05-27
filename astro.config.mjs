// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pravinemani.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/ai': '/stack/',
    '/ai/': '/stack/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
