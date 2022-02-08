import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  11000: {
    type: CLOTHES.WEAPON,
    img: '/images/items/weapon/dubina/1/2.gif',

    info: {
      title: "Волчий Голод",
      [FINANCE_CURRENSIES.GOLD]: 14,
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
      [MODIFICATORS.A_CRIT]: 3,
      [MODIFICATORS.A_UVOROT]: 3,
      [MODIFICATORS.MIN_DAMAGE]: 4,
      [MODIFICATORS.MAX_DAMAGE]: 8,
    },
  },

  11001: {
    type: CLOTHES.WEAPON,
    img: '/images/items/weapon/dubina/1/3.gif',

    info: {
      title: "Усмиряющая Дубина",
      [FINANCE_CURRENSIES.GOLD]: 14,
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
      [MODIFICATORS.A_CRIT]: 4,
      [MODIFICATORS.A_UVOROT]: 4,
      [MODIFICATORS.MIN_DAMAGE]: 3,
      [MODIFICATORS.MAX_DAMAGE]: 8,
    },
  },

  11002: {
    type: CLOTHES.WEAPON,
    img: '/images/items/weapon/dubina/1/4.gif',

    info: {
      title: "Тонфу",
      [FINANCE_CURRENSIES.GOLD]: 14,
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
      [MODIFICATORS.A_CRIT]: 4,
      [MODIFICATORS.A_UVOROT]: 4,
      [MODIFICATORS.MIN_DAMAGE]: 4,
      [MODIFICATORS.MAX_DAMAGE]: 7,
    },
  },
}

export default items
