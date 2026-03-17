import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@i18n': path.resolve(__dirname, 'src/assets/i18n')
      },
    },
    define: {
      'process.env.EMAILJS_SERVICE_ID': JSON.stringify(env.EMAILJS_SERVICE_ID),
      'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(env.EMAILJS_TEMPLATE_ID),
      'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(env.EMAILJS_PUBLIC_KEY),
      'process.env.GITHUB_TOKEN': JSON.stringify(env.GITHUB_TOKEN),
    },
  }
})