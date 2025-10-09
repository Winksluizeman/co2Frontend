import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // je Spring Boot backend
                changeOrigin: true,              // zorgt dat host headers kloppen
                secure: false,                   // handig als je later met https werkt
            }
        }
    }
})
