import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist', // Esta es la clave - salida un nivel arriba de frontend
    emptyOutDir: true, // Limpia el directorio de salida antes de construir
  },
})
