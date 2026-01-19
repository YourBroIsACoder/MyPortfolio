import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force restart to load postcss config
export default defineConfig({
  plugins: [react()],
})
