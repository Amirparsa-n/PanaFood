import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets:['maskable.png', 'favicon.ico' , 'touch.png'],
      manifest: {
        name: "Pana Food",
        short_name: "Pana Food",
        description: 'Selling food',
        theme_color: "#E95051",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/touch.png",
            size: "800x800",
            type: "image/png"
          },
          {
            src: "/192x192.png",
            size: "192x192",
            type: "image/png"
          },
          {
            src: "/apple-touch-icon.png",
            size: "512x512",
            type: "image/png"
          },
          {
            src: "/maskable.png",
            size: "512x512",
            type: "image/png",
            purpose: 'any'
          },
          {
            src: "/maskable.png",
            size: "512x512",
            type: "image/png",
            purpose: 'maskable'
          }
        ],
      },
      
    }),
  ],
})
