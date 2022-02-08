import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  4000: {
    type: CLOTHES.RING,
    img: '/images/items/rings/1/2.gif',

    info: {
      title: "Круг Проворства",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [STATS.DEX]: 1,
    },
  },

  4001: {
    type: CLOTHES.RING,
    img: '/images/items/rings/1/29.gif',

    info: {
      title: "Кольцо Обмана",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.UVOROT]: 6,
      [MODIFICATORS.A_UVOROT]: 6,
    },
  },

  4002: {
    type: CLOTHES.RING,
    img: '/images/items/rings/1/26.gif',

    info: {
      title: "Кольцо Глубин",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.CRIT]: 6,
      [MODIFICATORS.A_CRIT]: 6,
    },
  },

  4003: {
    type: CLOTHES.RING,
    img: '/images/items/rings/1/1.gif',

    info: {
      title: "Инстинкт Убийцы",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [STATS.SUC]: 1,
    },
  },

  4004: {
    type: CLOTHES.RING,
    img: '/images/items/rings/1/16.gif',

    info: {
      title: "Отрицание Смерти",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 9,
      [MODIFICATORS.PW]: 3,
    },
  },

  4005: {
    type: CLOTHES.RING,
    img: '/images/items/rings/1/3.gif',

    info: {
      title: "Сила Убеждения",
      [FINANCE_CURRENSIES.GOLD]: 5,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [STATS.STR]: 1,
    },
  },
}

export default items
