import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Force top-level resolution for react/react-dom and pre-bundle them so there is only one React copy
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    // Group all node_modules into a single vendor chunk to avoid circular import init issues
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // Raise chunk warning limit so single large modules don't spam warnings
    chunkSizeWarningLimit: 2000
  }
})
