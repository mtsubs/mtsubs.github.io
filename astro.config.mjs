import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Set your GitHub Pages URL here (used for sitemaps, canonical URLs, etc.)
  // If deploying to https://username.github.io, use: site: 'https://username.github.io'
  // If deploying to https://username.github.io/repo-name, also add: base: '/repo-name'
  site: 'https://montagesubs.github.io',
});
