import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/adminApi': {
        //目标路径
        target: 'http://localhost:3000/',
        //换源
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  }
})
