// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
// Static by default. Only the /api/* form handlers run server-side
// (they opt in with `export const prerender = false`). Everything else
// is still pre-rendered to static HTML at build time.
export default defineConfig({
  site: 'https://pravinemani.com',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    '/ai/': '/stack/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
