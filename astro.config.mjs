// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arturclementino.github.io',
  base: '/site-amigos-escolas',
  vite: {
    plugins: [tailwindcss()]
  }
});