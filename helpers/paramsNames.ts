import {
  BackEquipmentProps,
  BackEquipmentRequires,
  BackEquipmentTypes,
  BackEquipmentActionsName
} from '~/typings/equipments-items'

export type KeyNameKeys = BackEquipmentProps | BackEquipmentRequires | 'use_chance'

export const keyNameMatch:
  Record<KeyNameKeys, string> = {
  // Stats
  lvl: 'Уровень',
  str: 'Сила',
  dex: 'Ловкость',
  suc: 'Инстинкт',
  end: 'Жизнеспособность',
  int: 'Интеллект',
  free: 'Свободных статов',

  // Modificators
  hp: 'Уровень жизни',
  pw: 'Уровень выносливости',
  crit: 'Критический удар',
  a_crit: 'Против критич-го удара',
  uvorot: 'Увертывание',
  a_uvorot: 'Против Увертывания',
  min_damage: 'Мин. урон',
  max_damage: 'Макс. урон',

  armor_head: 'Броня головы',
  armor_body: 'Броня корпуса',
  armor_waist: 'Броня пояса',
  armor_legs: 'Броня ног',

  // Other
  maxWear: 'МАКС можно надеть таких предметов', // for stones
  use_chance: 'Вероятность срабатывания', // for runes
}

export const armorNameMatch: Record<BackEquipmentTypes, string> = {
  helmet: 'Шлем',
  weapon: 'Оружие',
  armor: 'Броня',

  earrings: 'Серьги',
  necklace: 'Ожерелье',
  gloves: 'Перчатки',
  bracelets: 'Наручи',
  ring: 'Кольцо',
  shield: 'Щит',
  boots: 'Ботинки',
  belt: 'Пояс',

  stone: 'Камень',
  rune: 'Руна',
}

const actionNameMatch: Record<BackEquipmentActionsName, string> = {
  hpHeal: 'Восстанавливает уровень жизни на',
  pwHeal: 'Восстанавливает уровень выносливости на',
}

export const getNameByKey = (key: KeyNameKeys): string => {
  return keyNameMatch[key] ? keyNameMatch[key] : key
}

export const getActionDescription = (actionObj: { name: BackEquipmentActionsName, val: number}): string => {
  switch (actionObj.name) {
    case 'hpHeal':
      return `${actionNameMatch.hpHeal} ${actionObj.val}`

    case 'pwHeal':
      return `${actionNameMatch.pwHeal} ${actionObj.val}`
  }

  return 'default description for rune'
}
