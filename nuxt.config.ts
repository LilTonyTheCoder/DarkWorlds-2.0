import { defineNuxtConfig } from 'nuxt'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  vite: {
    plugins: [
      VueI18nVitePlugin({include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')]})
    ]
  },
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
