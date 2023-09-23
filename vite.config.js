import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'

const projectRootDir = resolve(__dirname);
const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), alias],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, 'about', 'index.html'),
        projects: resolve(root, 'projects', 'index.html'),
        NotFound: resolve(root, 'NotFound', 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
})
