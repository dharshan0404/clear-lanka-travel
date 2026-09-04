import { defineConfig } from 'vite';
import { sites } from '@openai/sites-vite-plugin';
import { cp, mkdir } from 'node:fs/promises';

const copyWorker = {
  name: 'copy-static-worker',
  async writeBundle() {
    await mkdir('dist/server', { recursive: true });
    await cp('server/index.js', 'dist/server/index.js');
    for (const file of ['script.js','admin.js','customer.js','supabase-config.js','robots.txt','sitemap.xml']) {
      await cp(file, `dist/${file}`);
    }
  }
};

export default defineConfig({
  plugins: [sites(), copyWorker],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html',
        customer: 'customer.html'
      }
    }
  }
});
