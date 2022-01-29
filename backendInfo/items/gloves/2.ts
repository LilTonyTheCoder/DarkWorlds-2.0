import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  9000: {
    type: 'gloves',
    img: '/images/items/gloves/2/1.gif',

    info: {
      title: "Руки В Крови",
      priceGold: 11,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 5,
      end: 4,
    },

    props: {
      hp: 6,
      pw: 3,
      crit: 6,
      a_crit: 4,
    },
  },

  9001: {
    type: 'gloves',
    img: '/images/items/gloves/2/11.gif',

    info: {
      title: "Разменные Перчатки",
      priceGold: 11,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 4,
      suc: 4,
      end: 1,
    },

    props: {
      hp: 4,
      pw: 4,
      crit: 6,
      uvorot: 6,
    },
  },

  9002: {
    type: 'gloves',
    img: '/images/items/gloves/2/3.gif',

    info: {
      title: "Перчатки Варвара",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 5,
      dex: 1,
      suc: 1,
      end: 5,
    },

    props: {
      hp: 8,
      pw: 3,
      a_crit: 4,
      a_uvorot: 4,
    },
  },

  9003: {
    type: 'gloves',
    img: '/images/items/gloves/2/18.gif',

    info: {
      title: "Перчатки из Копченой Шкуры",
      priceGold: 15,
      maxDurability: 20,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 5,
      suc: 1,
      end: 4,
    },

    props: {
      hp: 6,
      pw: 3,
      uvorot: 6,
      a_uvorot: 4,
    },
  },

  9004: {
    type: 'gloves',
    img: '/images/items/gloves/2/22.gif',

    info: {
      title: "Парадные Перчатки",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 3,
      dex: 2,
      suc: 4,
      end: 3,
    },

    props: {
      hp: 6,
      pw: 3,
      a_crit: 6,
      uvorot: 4,
    },
  },

  9005: {
    type: 'gloves',
    img: '/images/items/gloves/2/23.gif',

    info: {
      title: "Волчий Коготь",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 3,
      dex: 4,
      suc: 2,
      end: 3,
    },

    props: {
      hp: 6,
      pw: 3,
      crit: 4,
      a_uvorot: 6,
    },
  },
}

export default items
