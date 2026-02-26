import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),

      '@domain': path.resolve(__dirname, 'src/app/domain'),
      '@application': path.resolve(__dirname, 'src/app/application'),
      '@infrastructure': path.resolve(__dirname, 'src/app/infrastructure'),
      '@presentation': path.resolve(__dirname, 'src/app/presentation'),
    },
  },
})