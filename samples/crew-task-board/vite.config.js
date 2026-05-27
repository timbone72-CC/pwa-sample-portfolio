import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pwa-sample-portfolio/crew-task-board/',
  plugins: [react()],
})
