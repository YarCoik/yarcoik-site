import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВМЕСТО 'my-repo-name' ВПИШИ ИМЯ СВОЕГО РЕПОЗИТОРИЯ КАК НА ГИТХАБЕ
  base: '/yarcoik-site/', 
})