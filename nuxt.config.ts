// https://nuxt.com/docs/api/configuration/nuxt-config

const {
  SUPABASE_URL,
  SUPABASE_ANON_KEY
} = process.env

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
    layoutTransition: { name: 'layout', mode: 'out-in' }, // out-in
    pageTransition: { name: 'page', mode: 'out-in' },
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
      routes: ['/', '/mechanism', '/about'],
      // crawlLinks: true,
    },
  },
  // configure build module
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-particles',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-delay-hydration',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  particles: {
    mode: 'full',
    lazy: true,
  },
  googleFonts: {
    // Options
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: true,
    download: true,
    base64: false,
  },
  // configure nuxt icon
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
  },
  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'init',
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    public: {
      supabaseConfig: {
        supabaseURL: SUPABASE_URL,
        supabaseAnonKey: SUPABASE_ANON_KEY
      }
    }
  }
})
