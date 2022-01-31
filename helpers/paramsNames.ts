import {
  BackEquipmentProps,
  BackEquipmentRequires,
  BackEquipmentTypes
} from '~/typings/equipments-items'

import { STATS, MODIFICATORS, BASE_INFO } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS, RUNES_ACTIONS } from '~/constants/clothesInfo'

export type KeyNameKeys = BackEquipmentProps | BackEquipmentRequires | CLOTHES_STATS.USE_CHANCE

export const keyNameMatch:
  Record<KeyNameKeys, string> = {
  // Stats
  [BASE_INFO.LVL]: 'Уровень',
  [STATS.STR]: 'Сила',
  [STATS.DEX]: 'Ловкость',
  [STATS.SUC]: 'Инстинкт',
  [STATS.END]: 'Жизнеспособность',
  [STATS.INT]: 'Интеллект',
  [STATS.FREE]: 'Свободных статов',

  // Modificators
  [MODIFICATORS.HP]: 'Уровень жизни',
  [MODIFICATORS.PW]: 'Уровень выносливости',
  [MODIFICATORS.CRIT]: 'Критический удар',
  [MODIFICATORS.A_CRIT]: 'Против критич-го удара',
  [MODIFICATORS.UVOROT]: 'Увертывание',
  [MODIFICATORS.A_UVOROT]: 'Против Увертывания',
  [MODIFICATORS.MIN_DAMAGE]: 'Мин. урон',
  [MODIFICATORS.MAX_DAMAGE]: 'Макс. урон',

  [MODIFICATORS.ARMOR_HEAD]: 'Броня головы',
  [MODIFICATORS.ARMOR_BODY]: 'Броня корпуса',
  [MODIFICATORS.ARMOR_WAIST]: 'Броня пояса',
  [MODIFICATORS.ARMOR_LEGS]: 'Броня ног',

  // Other
  [CLOTHES_STATS.MAX_POSSIBLE_WEAR]: 'МАКС можно надеть таких предметов', // for stones
  [CLOTHES_STATS.USE_CHANCE]: 'Вероятность срабатывания', // for runes
}

export const armorNameMatch: Record<BackEquipmentTypes, string> = {
  [CLOTHES.HELMET]: 'Шлем',
  [CLOTHES.WEAPON]: 'Оружие',
  [CLOTHES.ARMOR]: 'Броня',

  [CLOTHES.EARRINGS]: 'Серьги',
  [CLOTHES.NECKLACE]: 'Ожерелье',
  [CLOTHES.GLOVES]: 'Перчатки',
  [CLOTHES.BRACELETS]: 'Наручи',
  [CLOTHES.RING]: 'Кольцо',
  [CLOTHES.SHIELD]: 'Щит',
  [CLOTHES.BOOTS]: 'Ботинки',
  [CLOTHES.BELT]: 'Пояс',

  [CLOTHES.STONE]: 'Камень',
  [CLOTHES.RUNE]: 'Руна',
}

const actionNameMatch: Record<RUNES_ACTIONS, string> = {
  [RUNES_ACTIONS.HP_HEAL]: 'Восстанавливает уровень жизни на',
  [RUNES_ACTIONS.PW_HEAL]: 'Восстанавливает уровень выносливости на',
}

export const getNameByKey = (key: KeyNameKeys): string => {
  return keyNameMatch[key] ? keyNameMatch[key] : key
}

export const getActionDescription = (actionObj: { name: RUNES_ACTIONS, val: number}): string => {
  switch (actionObj.name) {
    case RUNES_ACTIONS.HP_HEAL:
      return `${actionNameMatch[RUNES_ACTIONS.HP_HEAL]} ${actionObj.val}`

    case RUNES_ACTIONS.PW_HEAL:
      return `${actionNameMatch[RUNES_ACTIONS.PW_HEAL]} ${actionObj.val}`
  }

  return 'default description for rune'
}
