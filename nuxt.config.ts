import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    typeCheck: true
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({ include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')] })
    ]
  },
  css: [
    '~/assets/css/index.scss'
  ],
  modules: [
    '@pinia/nuxt',
    'vite-plugin-vue-type-imports/nuxt' // https://github.com/vuejs/core/issues/4294#issuecomment-984033739
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  }
})
