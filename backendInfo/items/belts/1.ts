import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  3000: {
    type: 'belt',
    img: '/images/items/belts/1/21.gif',

    info: {
      title: "Кольчужный Пояс",
      priceGold: 6,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      suc: 1,
    },
  },

  3001: {
    type: 'belt',
    img: '/images/items/belts/1/25.gif',

    info: {
      title: "Изящный ремень",
      priceGold: 6,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      dex: 1,
    },
  },

  3002: {
    type: 'belt',
    img: '/images/items/belts/1/27.gif',

    info: {
      title: "Пояс Огненной Зари",
      priceGold: 6,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 3,
      pw: 3,
      a_crit: 3,
      uvorot: 3,
    },
  },

  3003: {
    type: 'belt',
    img: '/images/items/belts/1/1.gif',

    info: {
      title: "Пояс Забытых Времен",
      priceGold: 6,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      str: 1,
    },
  },

  3004: {
    type: 'belt',
    img: '/images/items/belts/1/38.gif',

    info: {
      title: "Пояс Скорпиона",
      priceGold: 6,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 12,
    },
  },
}

export default items
