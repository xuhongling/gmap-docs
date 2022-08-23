import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  ssr: {
    format: 'cjs'
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true
  },
  optimizeDeps: {
    // vitepress is aliased with replacement `join(DIST_CLIENT_PATH, '/index')`
    // This needs to be excluded from optimization
    exclude: ['vitepress']
  },
  server: {
    host: true,
    open: true,
    port: 5000,
  }
});
