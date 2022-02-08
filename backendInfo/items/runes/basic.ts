import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, RUNES_ACTIONS, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  13000: {
    type: CLOTHES.RUNE,
    img: '/images/items/runes/basic/11.gif',

    info: {
      title: "Малое исцеление",
      [FINANCE_CURRENSIES.GOLD]: 1,
      [CLOTHES_STATS.MAX_DURABILITY]: 2,
    },

    require: {
      [BASE_INFO.LVL]: 3,
      [STATS.INT]: 3,
    },

    action: {
      name: RUNES_ACTIONS.HP_HEAL,
      val: 25,
      use_chance: 80,
    },
  },

  13001: {
    type: CLOTHES.RUNE,
    img: '/images/items/runes/basic/15.gif',

    info: {
      title: "Малое восстановление",
      [FINANCE_CURRENSIES.GOLD]: 1,
      [CLOTHES_STATS.MAX_DURABILITY]: 2,
    },

    require: {
      [BASE_INFO.LVL]: 3,
      [STATS.INT]: 3,
    },

    action: {
      name: RUNES_ACTIONS.PW_HEAL,
      val: 25,
      use_chance: 80,
    },
  },

  13002: {
    type: CLOTHES.RUNE,
    img: '/images/items/runes/basic/12.gif',

    info: {
      title: "Среднее исцеление",
      [FINANCE_CURRENSIES.GOLD]: 2,
      [CLOTHES_STATS.MAX_DURABILITY]: 2,
    },

    require: {
      [BASE_INFO.LVL]: 5,
      [STATS.INT]: 5,
    },

    action: {
      name: RUNES_ACTIONS.HP_HEAL,
      val: 50,
      use_chance: 80,
    },
  },
}

export default items
