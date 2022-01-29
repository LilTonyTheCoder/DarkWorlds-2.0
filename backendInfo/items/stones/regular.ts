import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  5000: {
    type: 'stone',
    img: '/images/items/stones/rune_1_3_1.gif',

    info: {
      title: "Изумруд коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      hp: 5,
      pw: 5,
    },
  },

  5001: {
    type: 'stone',
    img: '/images/items/stones/rune_0_0_1.gif',

    info: {
      title: "Рубин коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      crit: 5,
    },
  },

  5002: {
    type: 'stone',
    img: '/images/items/stones/rune_0_1_1.gif',

    info: {
      title: "Сапфир коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      a_crit: 5,
    },
  },

  5003: {
    type: 'stone',
    img: '/images/items/stones/rune_0_2_1.gif',

    info: {
      title: "Алмаз коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      a_uvorot: 5,
    },
  },

  5004: {
    type: 'stone',
    img: '/images/items/stones/rune_0_3_1.gif',

    info: {
      title: "Халцедон коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      uvorot: 5,
    },
  },

  5005: {
    type: 'stone',
    img: '/images/items/stones/rune_1_2_1.gif',

    info: {
      title: "Аквамарин коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      min_damage: 1,
      max_damage: 2,
    },
  },

  5006: {
    type: 'stone',
    img: '/images/items/stones/rune_1_1_1.gif',

    info: {
      title: "Топаз коварства",
      pricePlatinum: 3,
      maxDurability: 9,
    },

    require: {
      lvl: 1,
      maxWear: 2,
    },

    props: {
      armor_head: 1,
      armor_body: 1,
      armor_waist: 1,
      armor_legs: 1,
    },
  },
}

export default items
