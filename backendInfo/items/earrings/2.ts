import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  7000: {
    type: 'earrings',
    img: '/images/items/earrings/2/1.gif',

    info: {
      title: "Малый Элиниум",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      str: 1,
      hp: 14,
    },
  },

  7001: {
    type: 'earrings',
    img: '/images/items/earrings/2/12.gif',

    info: {
      title: "Серьги Лабиринта",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      suc: 1,
      hp: 14,
    },
  },

  7002: {
    type: 'earrings',
    img: '/images/items/earrings/2/13.gif',

    info: {
      title: "Глаз Огня",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 20,
      pw: 5,
    },
  },

  7003: {
    type: 'earrings',
    img: '/images/items/earrings/2/14.gif',

    info: {
      title: "Рог Изобилия",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      dex: 1,
      hp: 14,
    },
  },

  7004: {
    type: 'earrings',
    img: '/images/items/earrings/2/26.gif',

    info: {
      title: "Янтарные Серьги",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      crit: 6,
      a_crit: 7,
      uvorot: 6,
      a_uvorot: 7,
    },
  },

  7005: {
    type: 'earrings',
    img: '/images/items/earrings/2/39.gif',

    info: {
      title: "Вещие Серьги",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 9,
      a_crit: 8,
      a_uvorot: 8,
    },
  },
}

export default items
