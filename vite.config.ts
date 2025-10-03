import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    copyPublicDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor-misc';
          }
          if (id.includes('components/Testimonials') || id.includes('components/Gallery')) {
            return 'heavy-components';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: [],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    host: true,
    historyApiFallback: true
  }
});
