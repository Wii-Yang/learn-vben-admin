import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv) => {
  const { mode, command } = config
  console.log(mode, command)
  return {
    plugins: [vue()],
  }
})
