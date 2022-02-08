import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  8000: {
    type: CLOTHES.NECKLACE,
    img: '/images/items/necklace/2/1.gif',

    info: {
      title: "Языческий Оберег",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
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

  8001: {
    type: CLOTHES.NECKLACE,
    img: '/images/items/necklace/2/2.gif',

    info: {
      title: "Наваждение",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.CRIT]: 5,
      [MODIFICATORS.A_CRIT]: 5,
      [MODIFICATORS.UVOROT]: 5,
      [MODIFICATORS.A_UVOROT]: 5,
    },
  },

  8002: {
    type: CLOTHES.NECKLACE,
    img: '/images/items/necklace/2/4.gif',

    info: {
      title: "Обруч Неуязвимости",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.CRIT]: 10,
      [MODIFICATORS.UVOROT]: 10,
    },
  },

  8003: {
    type: CLOTHES.NECKLACE,
    img: '/images/items/necklace/2/19.gif',

    info: {
      title: "Капля Солнца",
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
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.A_CRIT]: 10,
      [MODIFICATORS.UVOROT]: 10,
    },
  },

  8004: {
    type: CLOTHES.NECKLACE,
    img: '/images/items/necklace/2/24.gif',

    info: {
      title: "Кулон Забвения",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.CRIT]: 10,
      [MODIFICATORS.A_CRIT]: 10,
    },
  },

  8005: {
    type: CLOTHES.NECKLACE,
    img: '/images/items/necklace/2/33.gif',

    info: {
      title: "Медальон Друидов",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.CRIT]: 5,
      [MODIFICATORS.A_CRIT]: 8,
      [MODIFICATORS.UVOROT]: 5,
      [MODIFICATORS.A_UVOROT]: 8,
    },
  },
}

export default items
