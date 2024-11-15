import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  homepage: './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler" // or 'modern'
      }
    }
  },
  server: {
    proxy: {
      '/adminApi': {
        //目标路径
        target: 'http://112.74.15.57:3000/',
        // target: 'http://127.0.0.1:3000/',
        //换源
        changeOrigin: true,
      }
    },
  }
})
