import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  10000: {
    type: 'shield',
    img: '/images/items/shields/1/1.gif',

    info: {
      title: "Нормандский Щит",
      priceGold: 9,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 6,
      suc: 1,
      end: 4,
    },

    props: {
      pw: 4,
      uvorot: 2,
      a_uvorot: 2,

      armor_head: 2,
      armor_body: 2,
      armor_waist: 2,
      armor_legs: 2,
    },
  },

  10001: {
    type: 'shield',
    img: '/images/items/shields/1/2.gif',

    info: {
      title: "Круглый Щит",
      priceGold: 9,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 5,
      suc: 5,
      end: 1,
    },

    props: {
      pw: 4,
      crit: 4,
      uvorot: 4,
      armor_head: 1,
      armor_body: 1,
      armor_waist: 1,
      armor_legs: 1,
    },
  },

  10002: {
    type: 'shield',
    img: '/images/items/shields/1/4.gif',

    info: {
      title: "Большой Осадный Щит",
      priceGold: 9,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 6,
      dex: 1,
      suc: 1,
      end: 6,
    },

    props: {
      hp: 4,
      armor_head: 3,
      armor_body: 3,
      armor_waist: 3,
      armor_legs: 3,
    },
  },

  10003: {
    type: 'shield',
    img: '/images/items/shields/1/28.gif',

    info: {
      title: "Галерный Щит",
      priceGold: 9,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 3,
      dex: 4,
      suc: 2,
      end: 3,
    },

    props: {
      hp: 8,
      crit: 8,
      a_uvorot: 2,

      armor_head: 1,
      armor_body: 1,
      armor_waist: 1,
      armor_legs: 1,
    },
  },

  10004: {
    type: 'shield',
    img: '/images/items/shields/1/38.gif',

    info: {
      title: "Щит Ополченца",
      priceGold: 9,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 6,
      end: 4,
    },

    props: {
      hp: 4,
      crit: 2,
      a_crit: 2,

      armor_head: 2,
      armor_body: 2,
      armor_waist: 2,
      armor_legs: 2,
    },
  },

  10005: {
    type: 'shield',
    img: '/images/items/shields/1/39.gif',

    info: {
      title: "Щит Новобранца",
      priceGold: 9,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 3,
      dex: 2,
      suc: 4,
      end: 3,
    },

    props: {
      pw: 8,
      a_crit: 2,
      uvorot: 2,

      armor_head: 1,
      armor_body: 1,
      armor_waist: 1,
      armor_legs: 1,
    },
  },
}

export default items
