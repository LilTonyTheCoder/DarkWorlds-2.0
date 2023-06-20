import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
// https://vue-i18n.intlify.dev/guide/advanced/composition.html#datetime-formatting

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: {
    en,
    ru
  }
})

class StringGetter extends String {
  msg = ''

  constructor (msg) {
    super(msg)
    this.msg = msg
  }

  getValue () {
    const { t: $t } = i18n.global

    return $t(this.msg)
  }

  valueOf () {
    return this.getValue()
  }

  toString () {
    return this.getValue()
  }
}

export const i18nTranslator = (localesObjects) => {
  const ru = localesObjects.ru || {}
  const en = localesObjects.en || {}

  i18n.global.mergeLocaleMessage('en', en)
  i18n.global.mergeLocaleMessage('ru', ru)

  return {
    $t (msg) {
      return new StringGetter(msg)
    }
  }
}

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})
