// import { BackEquipmentItem } from '~/typings/equipments-items'
import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  1000: {
    type: CLOTHES.HELMET,
    img: '/images/items/helmets/1/57.gif',

    info: {
      title: "Славянский Шлем",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 3,
      [STATS.DEX]: 2,
      [STATS.SUC]: 4,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.PW]: 5,
      [MODIFICATORS.A_CRIT]: 2,
      [MODIFICATORS.UVOROT]: 1,
      [MODIFICATORS.ARMOR_HEAD]: 2,
    },
  },

  1001: {
    type: CLOTHES.HELMET,
    img: '/images/items/helmets/1/58.gif',

    info: {
      title: "Норвежский Шлем",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 6,
      [STATS.END]: 4,
    },

    props: {
      [MODIFICATORS.HP]: 3,
      [MODIFICATORS.CRIT]: 2,
      [MODIFICATORS.A_CRIT]: 1,
      [MODIFICATORS.ARMOR_HEAD]: 4,
    },
  },

  1002: {
    type: CLOTHES.HELMET,
    img: '/images/items/helmets/1/20.gif',

    info: {
      title: "Каска Рекрута",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 3,
      [STATS.DEX]: 4,
      [STATS.SUC]: 2,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.CRIT]: 1,
      [MODIFICATORS.A_UVOROT]: 2,
      [MODIFICATORS.ARMOR_HEAD]: 2,
    },
  },

  1003: {
    type: CLOTHES.HELMET,
    img: '/images/items/helmets/1/1.gif',

    info: {
      title: "Шлем Оруженосца",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 5,
      [STATS.SUC]: 5,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.PW]: 2,
      [MODIFICATORS.CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
      [MODIFICATORS.ARMOR_HEAD]: 2,
    },
  },

  1004: {
    type: CLOTHES.HELMET,
    img: '/images/items/helmets/1/59.gif',

    info: {
      title: "Шлем Новобранца",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 6,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 6,
    },

    props: {
      [MODIFICATORS.HP]: 3,
      [MODIFICATORS.A_CRIT]: 1,
      [MODIFICATORS.A_UVOROT]: 1,
      [MODIFICATORS.ARMOR_HEAD]: 5,
    },
  },

  1005: {
    type: CLOTHES.HELMET,
    img: '/images/items/helmets/1/2.gif',

    info: {
      title: "Степной Шлем",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 6,
      [STATS.SUC]: 1,
      [STATS.END]: 4,
    },

    props: {
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.UVOROT]: 2,
      [MODIFICATORS.A_UVOROT]: 1,
      [MODIFICATORS.ARMOR_HEAD]: 4,
    },
  },
}

export default items
