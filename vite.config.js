import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/scc_app_site/', // GitHub Pages용 base 경로
})

