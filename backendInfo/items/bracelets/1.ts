import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  12000: {
    type: CLOTHES.BRACELETS,
    img: '/images/items/bracelets/1/10.gif',

    info: {
      title: "Браслеты Душегуба",
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
      [MODIFICATORS.CRIT]: 3,
      [MODIFICATORS.A_CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
    },
  },

  12001: {
    type: CLOTHES.BRACELETS,
    img: '/images/items/bracelets/1/11.gif',

    info: {
      title: "Страж Рекрута",
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
      [MODIFICATORS.CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
      [MODIFICATORS.A_UVOROT]: 3,
    },
  },

  12002: {
    type: CLOTHES.BRACELETS,
    img: '/images/items/bracelets/1/12.gif',

    info: {
      title: "Карибские Наручи",
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
      [MODIFICATORS.A_CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
      [MODIFICATORS.A_UVOROT]: 3,
    },
  },

  12003: {
    type: CLOTHES.BRACELETS,
    img: '/images/items/bracelets/1/13.gif',

    info: {
      title: "Наручи из Грубой Кожи",
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
      [MODIFICATORS.CRIT]: 3,
      [MODIFICATORS.A_CRIT]: 3,
      [MODIFICATORS.A_UVOROT]: 3,
    },
  },

  12004: {
    type: CLOTHES.BRACELETS,
    img: '/images/items/bracelets/1/1.gif',

    info: {
      title: "Кожаный Браслет",
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
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.PW]: 5,
    },
  },
}

export default items
