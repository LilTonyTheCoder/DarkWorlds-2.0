import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  2000: {
    type: 'boots',
    img: '/images/items/boots/1/19.gif',

    info: {
      title: "Сапоги Острого Лезвия",
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
      armor_legs: 2,
    },
  },

  2001: {
    type: 'boots',
    img: '/images/items/boots/1/18.gif',

    info: {
      title: "Ботинки Лесоруба",
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
      armor_legs: 4,
    },
  },

  2002: {
    type: 'boots',
    img: '/images/items/boots/1/460.gif',

    info: {
      title: "Самодельные Боты",
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
      armor_legs: 5,
    },
  },

  2003: {
    type: 'boots',
    img: '/images/items/boots/1/22.gif',

    info: {
      title: "Гримсы",
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
      hp: 2,
      crit: 3,
      uvorot: 3,
      armor_legs: 2,
    },
  },

  2004: {
    type: 'boots',
    img: '/images/items/boots/1/3.gif',

    info: {
      title: "Тяжелая Поступь",
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
      hp: 5,
      a_crit: 1,
      uvorot: 2,
      armor_legs: 3,
    },
  },

  2005: {
    type: 'boots',
    img: '/images/items/boots/1/2.gif',

    info: {
      title: "Медвежья Лапа",
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
      hp: 3,
      uvorot: 3,
      a_uvorot: 1,
      armor_legs: 3,
    },
  },
}

export default items
