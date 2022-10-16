import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';
// import en from './locales/en.json'
// import sl from './locales/sl.json'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  alias: {
    'images': resolve(__dirname, './assets/images'),
    'style': resolve(__dirname, './assets/style'),
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    // '@intlify/nuxt3',
    // '@nuxtjs/i18n',
  ],
  // i18n: {
  //   locales: [
  //     { code: 'en', iso: 'en-US', file: 'en.json' },
  //     { code: 'sl', iso: 'sl', file: 'sl.json' },
  //   ],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     locale: 'en-US',
  //     fallbackLocale: 'en',
  //     messages: {
  //       en,
  //       sl,
  //     }
  //   },
  // },
  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     // You can setting same `createI18n` options here !
  //     locale: 'en',
  //     messages: {
  //       en: {
  //         hello: 'Hello'
  //       },
  //       sl: {
  //         hello: 'zivjo'
  //       }
  //     }
  //   },
  // },
  vite: {
    define: {
      '__DEV__': (process.env.NODE_ENV === 'development').toString(),
    },
  },
  build: {
    transpile: [
      '@apollo/client',
      '@vue/apollo-composable',
      'ts-invariant/process',
      '@heroicons/vue',
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['~~/assets/style/fonts.css', '~~/assets/style/global.scss'],
});
