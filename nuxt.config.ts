import {defineNuxtConfig} from 'nuxt/config';
console.log('aaa (process.env.NODE_ENV === \'development\').toString()', (process.env.NODE_ENV === 'development').toString());
export default defineNuxtConfig({
  publicRuntimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
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
  css: ['~~/assets/css/fonts.css', '~~/assets/css/global.css'],
});
