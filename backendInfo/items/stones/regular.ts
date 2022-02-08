import { BackEquipmentItem } from '~/typings/equipments-items'
import { BASE_INFO, MODIFICATORS, STATS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

const items: Record<number, BackEquipmentItem> = {
  5000: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_1_3_1.gif',

    info: {
      title: "Изумруд коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.HP]: 5,
      [MODIFICATORS.PW]: 5,
    },
  },

  5001: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_0_0_1.gif',

    info: {
      title: "Рубин коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.CRIT]: 5,
    },
  },

  5002: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_0_1_1.gif',

    info: {
      title: "Сапфир коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.A_CRIT]: 5,
    },
  },

  5003: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_0_2_1.gif',

    info: {
      title: "Алмаз коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.A_UVOROT]: 5,
    },
  },

  5004: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_0_3_1.gif',

    info: {
      title: "Халцедон коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.UVOROT]: 5,
    },
  },

  5005: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_1_2_1.gif',

    info: {
      title: "Аквамарин коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.MIN_DAMAGE]: 1,
      [MODIFICATORS.MAX_DAMAGE]: 2,
    },
  },

  5006: {
    type: CLOTHES.STONE,
    img: '/images/items/stones/rune_1_1_1.gif',

    info: {
      title: "Топаз коварства",
      [FINANCE_CURRENSIES.PLATINUM]: 3,
      [CLOTHES_STATS.MAX_DURABILITY]: 9,
    },

    require: {
      [BASE_INFO.LVL]: 1,
      maxWear: 2,
    },

    props: {
      [MODIFICATORS.ARMOR_HEAD]: 1,
      [MODIFICATORS.ARMOR_BODY]: 1,
      [MODIFICATORS.ARMOR_WAIST]: 1,
      [MODIFICATORS.ARMOR_LEGS]: 1,
    },
  },
}

export default items
