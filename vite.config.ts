import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base nur im Build auf den GitHub-Pages-Projektpfad setzen; im Dev bleibt '/'.
// Multipage: jede Route ist ein eigenes HTML (echtes Prerendering fuer SEO),
// kein Client-Router noetig.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/allindrive-studio/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        funktionen: 'funktionen/index.html',
      },
    },
  },
}))
