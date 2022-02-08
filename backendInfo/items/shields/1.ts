import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  10000: {
    type: CLOTHES.SHIELD,
    img: '/images/items/shields/1/1.gif',

    info: {
      title: "Нормандский Щит",
      [FINANCE_CURRENSIES.GOLD]: 9,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 6,
      [STATS.SUC]: 1,
      [STATS.END]: 4,
    },

    props: {
      [MODIFICATORS.PW]: 4,
      [MODIFICATORS.UVOROT]: 2,
      [MODIFICATORS.A_UVOROT]: 2,

      [MODIFICATORS.ARMOR_HEAD]: 2,
      [MODIFICATORS.ARMOR_BODY]: 2,
      [MODIFICATORS.ARMOR_WAIST]: 2,
      [MODIFICATORS.ARMOR_LEGS]: 2,
    },
  },

  10001: {
    type: CLOTHES.SHIELD,
    img: '/images/items/shields/1/2.gif',

    info: {
      title: "Круглый Щит",
      [FINANCE_CURRENSIES.GOLD]: 9,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 5,
      [STATS.SUC]: 5,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.PW]: 4,
      [MODIFICATORS.CRIT]: 4,
      [MODIFICATORS.UVOROT]: 4,
      [MODIFICATORS.ARMOR_HEAD]: 1,
      [MODIFICATORS.ARMOR_BODY]: 1,
      [MODIFICATORS.ARMOR_WAIST]: 1,
      [MODIFICATORS.ARMOR_LEGS]: 1,
    },
  },

  10002: {
    type: CLOTHES.SHIELD,
    img: '/images/items/shields/1/4.gif',

    info: {
      title: "Большой Осадный Щит",
      [FINANCE_CURRENSIES.GOLD]: 9,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 6,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 6,
    },

    props: {
      [MODIFICATORS.HP]: 4,
      [MODIFICATORS.ARMOR_HEAD]: 3,
      [MODIFICATORS.ARMOR_BODY]: 3,
      [MODIFICATORS.ARMOR_WAIST]: 3,
      [MODIFICATORS.ARMOR_LEGS]: 3,
    },
  },

  10003: {
    type: CLOTHES.SHIELD,
    img: '/images/items/shields/1/28.gif',

    info: {
      title: "Галерный Щит",
      [FINANCE_CURRENSIES.GOLD]: 9,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 3,
      [STATS.DEX]: 4,
      [STATS.SUC]: 2,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.HP]: 8,
      [MODIFICATORS.CRIT]: 8,
      [MODIFICATORS.A_UVOROT]: 2,

      [MODIFICATORS.ARMOR_HEAD]: 1,
      [MODIFICATORS.ARMOR_BODY]: 1,
      [MODIFICATORS.ARMOR_WAIST]: 1,
      [MODIFICATORS.ARMOR_LEGS]: 1,
    },
  },

  10004: {
    type: CLOTHES.SHIELD,
    img: '/images/items/shields/1/38.gif',

    info: {
      title: "Щит Ополченца",
      [FINANCE_CURRENSIES.GOLD]: 9,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 6,
      [STATS.END]: 4,
    },

    props: {
      [MODIFICATORS.HP]: 4,
      [MODIFICATORS.CRIT]: 2,
      [MODIFICATORS.A_CRIT]: 2,

      [MODIFICATORS.ARMOR_HEAD]: 2,
      [MODIFICATORS.ARMOR_BODY]: 2,
      [MODIFICATORS.ARMOR_WAIST]: 2,
      [MODIFICATORS.ARMOR_LEGS]: 2,
    },
  },

  10005: {
    type: CLOTHES.SHIELD,
    img: '/images/items/shields/1/39.gif',

    info: {
      title: "Щит Новобранца",
      [FINANCE_CURRENSIES.GOLD]: 9,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 3,
      [STATS.DEX]: 2,
      [STATS.SUC]: 4,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.PW]: 8,
      [MODIFICATORS.A_CRIT]: 2,
      [MODIFICATORS.UVOROT]: 2,

      [MODIFICATORS.ARMOR_HEAD]: 1,
      [MODIFICATORS.ARMOR_BODY]: 1,
      [MODIFICATORS.ARMOR_WAIST]: 1,
      [MODIFICATORS.ARMOR_LEGS]: 1,
    },
  },
}

export default items
