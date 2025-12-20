import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    host: true
  },
   preview: {
    host: true
  },
  plugins: [
    react(), 
    tsconfigPaths(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: "Sapiens Lab 3D",
        short_name: "Sapiens Lab 3D",
        description: "A ciência em 3D",
        theme_color: "#01cdfe",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
})
