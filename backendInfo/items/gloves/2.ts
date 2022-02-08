import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS} from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  9000: {
    type: CLOTHES.GLOVES,
    img: '/images/items/gloves/2/1.gif',

    info: {
      title: "Руки В Крови",
      [FINANCE_CURRENSIES.GOLD]: 11,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 5,
      [STATS.END]: 4,
    },

    props: {
      [MODIFICATORS.HP]: 6,
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.CRIT]: 6,
      [MODIFICATORS.A_CRIT]: 4,
    },
  },

  9001: {
    type: CLOTHES.GLOVES,
    img: '/images/items/gloves/2/11.gif',

    info: {
      title: "Разменные Перчатки",
      [FINANCE_CURRENSIES.GOLD]: 11,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 4,
      [STATS.SUC]: 4,
      [STATS.END]: 1,
    },

    props: {
      [MODIFICATORS.HP]: 4,
      [MODIFICATORS.PW]: 4,
      [MODIFICATORS.CRIT]: 6,
      [MODIFICATORS.UVOROT]: 6,
    },
  },

  9002: {
    type: CLOTHES.GLOVES,
    img: '/images/items/gloves/2/3.gif',

    info: {
      title: "Перчатки Варвара",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 5,
      [STATS.DEX]: 1,
      [STATS.SUC]: 1,
      [STATS.END]: 5,
    },

    props: {
      [MODIFICATORS.HP]: 8,
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.A_CRIT]: 4,
      [MODIFICATORS.A_UVOROT]: 4,
    },
  },

  9003: {
    type: CLOTHES.GLOVES,
    img: '/images/items/gloves/2/18.gif',

    info: {
      title: "Перчатки из Копченой Шкуры",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 1,
      [STATS.DEX]: 5,
      [STATS.SUC]: 1,
      [STATS.END]: 4,
    },

    props: {
      [MODIFICATORS.HP]: 6,
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.UVOROT]: 6,
      [MODIFICATORS.A_UVOROT]: 4,
    },
  },

  9004: {
    type: CLOTHES.GLOVES,
    img: '/images/items/gloves/2/22.gif',

    info: {
      title: "Парадные Перчатки",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 3,
      [STATS.DEX]: 2,
      [STATS.SUC]: 4,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.HP]: 6,
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.A_CRIT]: 6,
      [MODIFICATORS.UVOROT]: 4,
    },
  },

  9005: {
    type: CLOTHES.GLOVES,
    img: '/images/items/gloves/2/23.gif',

    info: {
      title: "Волчий Коготь",
      [FINANCE_CURRENSIES.GOLD]: 15,
      [CLOTHES_STATS.MAX_DURABILITY]: 30,
    },

    require: {
      [BASE_INFO.LVL]: 2,
      [STATS.STR]: 3,
      [STATS.DEX]: 4,
      [STATS.SUC]: 2,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.HP]: 6,
      [MODIFICATORS.PW]: 3,
      [MODIFICATORS.CRIT]: 4,
      [MODIFICATORS.A_UVOROT]: 6,
    },
  },
}

export default items
