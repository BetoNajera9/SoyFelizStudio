export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Soy Feliz Studio',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    }
  },

  css: ['~/assets/css/style.css'],

  devtools: { enabled: true },

  modules: ['vue3-carousel-nuxt', 'nuxt-viewport', '@nuxt/image',
    'nuxt-icon'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      VIDEO_URL: process.env.VIDEO_URL
    }
  },

  image: {
    format: ['webp'],
    inject: true,
  }
})