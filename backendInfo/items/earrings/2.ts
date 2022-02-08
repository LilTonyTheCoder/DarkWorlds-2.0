import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  7000: {
    type: CLOTHES.EARRINGS,
    img: '/images/items/earrings/2/1.gif',

    info: {
      title: "Малый Элиниум",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [STATS.STR]: 1,
      [MODIFICATORS.HP]: 14,
    },
  },

  7001: {
    type: CLOTHES.EARRINGS,
    img: '/images/items/earrings/2/12.gif',

    info: {
      title: "Серьги Лабиринта",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [STATS.SUC]: 1,
      [MODIFICATORS.HP]: 14,
    },
  },

  7002: {
    type: CLOTHES.EARRINGS,
    img: '/images/items/earrings/2/13.gif',

    info: {
      title: "Глаз Огня",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 20,
      [MODIFICATORS.PW]: 5,
    },
  },

  7003: {
    type: CLOTHES.EARRINGS,
    img: '/images/items/earrings/2/14.gif',

    info: {
      title: "Рог Изобилия",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [STATS.DEX]: 1,
      [MODIFICATORS.HP]: 14,
    },
  },

  7004: {
    type: CLOTHES.EARRINGS,
    img: '/images/items/earrings/2/26.gif',

    info: {
      title: "Янтарные Серьги",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.CRIT]: 6,
      [MODIFICATORS.A_CRIT]: 7,
      [MODIFICATORS.UVOROT]: 6,
      [MODIFICATORS.A_UVOROT]: 7,
    },
  },

  7005: {
    type: CLOTHES.EARRINGS,
    img: '/images/items/earrings/2/39.gif',

    info: {
      title: "Вещие Серьги",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 9,
      [MODIFICATORS.A_CRIT]: 8,
      [MODIFICATORS.A_UVOROT]: 8,
    },
  },
}

export default items
