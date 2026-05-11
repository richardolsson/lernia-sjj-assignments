import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/static',
    lib: {
      entry: './src/main.tsx',
      cssFileName: 'game',
      fileName: 'game',
      formats: ['es'],
      name: 'game',
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5080',
    }
  },
})
