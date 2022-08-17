import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    '~/assets/css/index.scss'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  }
})
