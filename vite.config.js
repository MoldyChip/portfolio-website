import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), alias],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, 'nested/index.html')
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 10086,
    open: false, 
    cors: true, 
  },
})
