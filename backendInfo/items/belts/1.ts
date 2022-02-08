import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  3000: {
    type: CLOTHES.BELT,
    img: '/images/items/belts/1/21.gif',

    info: {
      title: "Кольчужный Пояс",
      [FINANCE_CURRENSIES.GOLD]: 6,
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

  3001: {
    type: CLOTHES.BELT,
    img: '/images/items/belts/1/25.gif',

    info: {
      title: "Изящный ремень",
      [FINANCE_CURRENSIES.GOLD]: 6,
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

  3002: {
    type: CLOTHES.BELT,
    img: '/images/items/belts/1/27.gif',

    info: {
      title: "Пояс Огненной Зари",
      [FINANCE_CURRENSIES.GOLD]: 6,
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
      [MODIFICATORS.HP]: 3,
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.A_CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
    },
  },

  3003: {
    type: CLOTHES.BELT,
    img: '/images/items/belts/1/1.gif',

    info: {
      title: "Пояс Забытых Времен",
      [FINANCE_CURRENSIES.GOLD]: 6,
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

  3004: {
    type: CLOTHES.BELT,
    img: '/images/items/belts/1/38.gif',

    info: {
      title: "Пояс Скорпиона",
      [FINANCE_CURRENSIES.GOLD]: 6,
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
      [MODIFICATORS.HP]: 12,
    },
  },
}

export default items
