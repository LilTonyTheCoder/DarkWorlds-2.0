import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  4000: {
    type: 'ring',
    img: '/images/items/rings/1/2.gif',

    info: {
      title: "Круг Проворства",
      priceGold: 5,
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

  4001: {
    type: 'ring',
    img: '/images/items/rings/1/29.gif',

    info: {
      title: "Кольцо Обмана",
      priceGold: 5,
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
      uvorot: 6,
      a_uvorot: 6,
    },
  },

  4002: {
    type: 'ring',
    img: '/images/items/rings/1/26.gif',

    info: {
      title: "Кольцо Глубин",
      priceGold: 5,
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
      crit: 6,
      a_crit: 6,
    },
  },

  4003: {
    type: 'ring',
    img: '/images/items/rings/1/1.gif',

    info: {
      title: "Инстинкт Убийцы",
      priceGold: 5,
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

  4004: {
    type: 'ring',
    img: '/images/items/rings/1/16.gif',

    info: {
      title: "Отрицание Смерти",
      priceGold: 5,
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
      hp: 9,
      pw: 3,
    },
  },

  4005: {
    type: 'ring',
    img: '/images/items/rings/1/3.gif',

    info: {
      title: "Сила Убеждения",
      priceGold: 5,
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
}

export default items
