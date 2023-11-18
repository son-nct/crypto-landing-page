// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // configure meta
  app: {
    head: {
      title: 'Crypteck - ICO Landing Page & Crypto',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Crypteck - ICO Landing Page & Crypto',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      // link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },
  },
  // configure tailwind and css
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.scss'],
  // configure nitro server and compress static files
  nitro: {
    compressPublicAssets: true,
    prerender: {
      // crawlLinks: true,
    },
  },
  // configure build module
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    // Options
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: true,
    download: true,
    base64: false,
  },
})