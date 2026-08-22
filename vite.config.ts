import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base nur im Build auf den GitHub-Pages-Projektpfad setzen; im Dev bleibt '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/allindrive-studio/' : '/',
  plugins: [react()],
}))
