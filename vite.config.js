import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc'
import WindiCSSPlugin from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSSPlugin({ dir: resolve(__dirname, 'src') })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'MyReactTailwindLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `my-react-tailwind-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
