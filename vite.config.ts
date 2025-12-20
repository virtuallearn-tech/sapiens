import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import { VitePWA } from 'vite-plugin-pwa'
// import basicSsl from '@vitejs/plugin-basic-ssl'

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
    // basicSsl(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
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
      }, //END MANIFEST
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 dias
              }
            }//END IMAGES CACHE
          },
          {
            urlPattern: ({ url }) => url.pathname.endsWith(".md"),
            handler: "NetworkFirst",
            options: {
              cacheName: "markdown-cache",
              expiration: {
                maxEntries: 300,
                maxAgeSeconds: 60 * 60 * 24 * 7
              },
              networkTimeoutSeconds: 3,
              plugins: [
                {
                  handlerDidError: async () => {
                    return fetch("/offline.md");
                  }
                }
              ]
            }
          }//END MARKDOWN CACHE
        ]
      },//END WORKBOX
    })
  ],
})
