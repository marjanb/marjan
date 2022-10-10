import { defineNuxtConfig } from 'nuxt';
import path from 'path';

export default defineNuxtConfig({
  publicRuntimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  alias: {
    '@': path.resolve(__dirname, './src'),
    '~': path.resolve(__dirname, './src'),
    '@@': path.resolve(__dirname, './'),
    '~~': path.resolve(__dirname, './'),
    assets: path.resolve(__dirname, './assets'),
    static: path.resolve(__dirname, './static'),
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
