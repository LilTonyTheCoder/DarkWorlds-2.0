import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  8000: {
    type: 'necklace',
    img: '/images/items/necklace/2/1.gif',

    info: {
      title: "Языческий Оберег",
      priceGold: 15,
      maxDurability: 30,
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

  8001: {
    type: 'necklace',
    img: '/images/items/necklace/2/2.gif',

    info: {
      title: "Наваждение",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 5,
      crit: 5,
      a_crit: 5,
      uvorot: 5,
      a_uvorot: 5,
    },
  },

  8002: {
    type: 'necklace',
    img: '/images/items/necklace/2/4.gif',

    info: {
      title: "Обруч Неуязвимости",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 5,
      crit: 10,
      uvorot: 10,
    },
  },

  8003: {
    type: 'necklace',
    img: '/images/items/necklace/2/19.gif',

    info: {
      title: "Капля Солнца",
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
      hp: 5,
      a_crit: 10,
      uvorot: 10,
    },
  },

  8004: {
    type: 'necklace',
    img: '/images/items/necklace/2/24.gif',

    info: {
      title: "Кулон Забвения",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      hp: 5,
      crit: 10,
      a_crit: 10,
    },
  },

  8005: {
    type: 'necklace',
    img: '/images/items/necklace/2/33.gif',

    info: {
      title: "Медальон Друидов",
      priceGold: 15,
      maxDurability: 30,
    },

    require: {
      lvl: 2,
      str: 1,
      dex: 1,
      suc: 1,
      end: 1,
    },

    props: {
      crit: 5,
      a_crit: 8,
      uvorot: 5,
      a_uvorot: 8,
    },
  },
}

export default items
