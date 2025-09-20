import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 1000,
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
          'components': [
            './src/components/Header',
            './src/components/Hero',
            './src/components/Footer'
          ]
        },
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        arguments: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: [],
    force: true
  },
  server: {
    hmr: {
      overlay: false
    },
    host: true
  }
});
