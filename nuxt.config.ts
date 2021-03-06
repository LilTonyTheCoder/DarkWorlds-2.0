import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    '~/assets/css/index.scss'
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  }
})
