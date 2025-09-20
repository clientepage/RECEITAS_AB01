import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
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
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
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
    host: true,
    historyApiFallback: true
  },
  preview: {
    port: 4173,
    host: true
  }
});
