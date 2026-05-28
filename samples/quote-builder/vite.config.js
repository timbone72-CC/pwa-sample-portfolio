import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pwa-sample-portfolio/quote-builder/',
  plugins: [react()],
})
