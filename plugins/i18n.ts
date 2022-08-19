import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
// https://vue-i18n.intlify.dev/guide/advanced/composition.html#datetime-formatting

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      ru
    }
  })

  vueApp.use(i18n)
})
