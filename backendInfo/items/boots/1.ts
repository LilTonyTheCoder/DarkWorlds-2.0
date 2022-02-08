import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  2000: {
    type: CLOTHES.BOOTS,
    img: '/images/items/boots/1/19.gif',

    info: {
      title: "Сапоги Острого Лезвия",
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
      [MODIFICATORS.ARMOR_LEGS]: 2,
    },
  },

  2001: {
    type: CLOTHES.BOOTS,
    img: '/images/items/boots/1/18.gif',

    info: {
      title: "Ботинки Лесоруба",
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
      [MODIFICATORS.ARMOR_LEGS]: 4,
    },
  },

  2002: {
    type: CLOTHES.BOOTS,
    img: '/images/items/boots/1/460.gif',

    info: {
      title: "Самодельные Боты",
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
      [MODIFICATORS.ARMOR_LEGS]: 5,
    },
  },

  2003: {
    type: CLOTHES.BOOTS,
    img: '/images/items/boots/1/22.gif',

    info: {
      title: "Гримсы",
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
      [MODIFICATORS.HP]: 2,
      [MODIFICATORS.CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
      [MODIFICATORS.ARMOR_LEGS]: 2,
    },
  },

  2004: {
    type: CLOTHES.BOOTS,
    img: '/images/items/boots/1/3.gif',

    info: {
      title: "Тяжелая Поступь",
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
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.A_CRIT]: 1,
      [MODIFICATORS.UVOROT]: 2,
      [MODIFICATORS.ARMOR_LEGS]: 3,
    },
  },

  2005: {
    type: CLOTHES.BOOTS,
    img: '/images/items/boots/1/2.gif',

    info: {
      title: "Медвежья Лапа",
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
      [MODIFICATORS.HP]: 3,
      [MODIFICATORS.UVOROT]: 3,
      [MODIFICATORS.A_UVOROT]: 1,
      [MODIFICATORS.ARMOR_LEGS]: 3,
    },
  },
}

export default items
