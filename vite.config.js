import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust chunk size warnings
    minify: 'esbuild', // Faster minification
    sourcemap: true, // Enable source maps for debugging
  },
})
