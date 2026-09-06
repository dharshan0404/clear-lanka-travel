import { defineConfig } from 'vite';
import { sites } from '@openai/sites-vite-plugin';
import { cp, mkdir } from 'node:fs/promises';

const copyWorker = {
  name: 'copy-static-worker',
  async writeBundle() {
    await mkdir('dist/server', { recursive: true });
    await mkdir('dist/.openai', { recursive: true });
    await cp('server/index.js', 'dist/server/index.js');
    await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
    for (const file of ['script.js','admin.js','customer.js','supabase-config.js','robots.txt','sitemap.xml']) {
      await cp(file, `dist/client/${file}`);
    }
  }
};

export default defineConfig({
  plugins: [sites(), copyWorker],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html',
        customer: 'customer.html'
      }
    }
  }
});
