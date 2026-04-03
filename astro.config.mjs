import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'zh-hans',
    locales: ['zh-hans', 'en'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'none'
    }
  },
  site: 'https://mtsubs.github.io'
});