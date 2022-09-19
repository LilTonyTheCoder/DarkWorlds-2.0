import ru from './index.i18n.ru.json';
import en from './index.i18n.en.json';
import { i18nTranslator } from '~/plugins/i18n'

/** STORE */
const { $t } = i18nTranslator({ en, ru });

export enum FINANCE_CURRENSIES {
  GOLD = 'GOLD',
  SILVER = 'SILVER',
  PLATINUM = 'PLATINUM',
}

export const FINANCE_NAMES = {
  [FINANCE_CURRENSIES.GOLD]: $t('Gold'),
  [FINANCE_CURRENSIES.SILVER]: $t('Silver'),
  [FINANCE_CURRENSIES.PLATINUM]: $t('Bronze')
}
