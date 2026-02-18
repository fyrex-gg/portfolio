import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for HostGator compatibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate manifest for better caching
    manifest: true,
    // Optimize chunks - split large dependencies
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    },
    chunkSizeWarningLimit: 500 // Adjust warning limit
  },
  server: {
    port: 3000,
    open: true
  }
})
