// import { BackEquipmentItem } from '~/typings/equipments-items'
import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  1000: {
    type: 'helmet',
    img: '/images/items/helmets/1/57.gif',

    info: {
      title: "Славянский Шлем",
      priceGold: 5,
      maxDurability: 30,
    },

    require: {
      lvl: 1,
      str: 3,
      dex: 2,
      suc: 4,
      end: 3,
    },

    props: {
      pw: 5,
      a_crit: 2,
      uvorot: 1,
      armor_head: 2,
    },
  },

  1001: {
    type: 'helmet',
    img: '/images/items/helmets/1/58.gif',

    info: {
      title: "Норвежский Шлем",
      priceGold: 5,
      maxDurability: 30,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 6,
      end: 4,
    },

    props: {
      hp: 3,
      crit: 2,
      a_crit: 1,
      armor_head: 4,
    },
  },

  1002: {
    type: 'helmet',
    img: '/images/items/helmets/1/20.gif',

    info: {
      title: "Каска Рекрута",
      priceGold: 5,
      maxDurability: 30,
    },

    require: {
      lvl: 1,
      str: 3,
      dex: 4,
      suc: 2,
      end: 3,
    },

    props: {
      hp: 5,
      crit: 1,
      a_uvorot: 2,
      armor_head: 2,
    },
  },

  1003: {
    type: 'helmet',
    img: '/images/items/helmets/1/1.gif',

    info: {
      title: "Шлем Оруженосца",
      priceGold: 5,
      maxDurability: 30,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 5,
      suc: 5,
      end: 1,
    },

    props: {
      pw: 2,
      crit: 3,
      uvorot: 3,
      armor_head: 2,
    },
  },

  1004: {
    type: 'helmet',
    img: '/images/items/helmets/1/59.gif',

    info: {
      title: "Шлем Новобранца",
      priceGold: 5,
      maxDurability: 30,
    },

    require: {
      lvl: 1,
      str: 6,
      dex: 1,
      suc: 1,
      end: 6,
    },

    props: {
      hp: 3,
      a_crit: 1,
      a_uvorot: 1,
      armor_head: 5,
    },
  },

  1005: {
    type: 'helmet',
    img: '/images/items/helmets/1/2.gif',

    info: {
      title: "Степной Шлем",
      priceGold: 5,
      maxDurability: 30,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 6,
      suc: 1,
      end: 4,
    },

    props: {
      pw: 3,
      uvorot: 2,
      a_uvorot: 1,
      armor_head: 4,
    },
  },
}

export default items
