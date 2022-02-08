import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  6000: {
    type: CLOTHES.ARMOR,
    img: '/images/items/armor/1/28.gif',

    info: {
      title: "Полуночный Жилет",
      [FINANCE_CURRENSIES.GOLD]: 8,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 3,
      [STATS.DEX]: 5,
      [STATS.SUC]: 5,
      [STATS.END]: 3,
    },

    props: {
      [MODIFICATORS.CRIT]: 3,
      [MODIFICATORS.A_CRIT]: 3,
      [MODIFICATORS.UVOROT]: 3,
      [MODIFICATORS.A_UVOROT]: 3,
      [MODIFICATORS.ARMOR_BODY]: 2,
    },
  },

  6001: {
    type: CLOTHES.ARMOR,
    img: '/images/items/armor/1/29.gif',

    info: {
      title: "Полуденный Жилет",
      [FINANCE_CURRENSIES.GOLD]: 8,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 5,
      [STATS.DEX]: 5,
      [STATS.SUC]: 5,
      [STATS.END]: 5,
    },

    props: {
      [STATS.STR]: 1,
      [MODIFICATORS.ARMOR_BODY]: 3,
    },
  },

  6002: {
    type: CLOTHES.ARMOR,
    img: '/images/items/armor/1/27.gif',

    info: {
      title: "Легкий Колет",
      [FINANCE_CURRENSIES.GOLD]: 8,
      [CLOTHES_STATS.MAX_DURABILITY]: 20,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      [STATS.STR]: 6,
      [STATS.DEX]: 3,
      [STATS.SUC]: 3,
      [STATS.END]: 6,
    },

    props: {
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.PW]: 5,
      [MODIFICATORS.ARMOR_BODY]: 5,
    },
  },
}

export default items
