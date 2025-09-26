import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: false,
    assetsInlineLimit: 8192,
    copyPublicDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: []
  },
  server: {
    hmr: {
      overlay: false
    },
    host: true,
    historyApiFallback: true
  }
});
