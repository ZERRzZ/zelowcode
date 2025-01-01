import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_DIR,
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      outDir: 'docs',
      rollupOptions: {
        output: {
          // 配置 js 最小拆包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      }
    }
  }
})
