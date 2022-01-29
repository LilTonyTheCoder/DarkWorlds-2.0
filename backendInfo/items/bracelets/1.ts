import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  12000: {
    type: 'bracelets',
    img: '/images/items/bracelets/1/10.gif',

    info: {
      title: "Браслеты Душегуба",
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
      crit: 3,
      a_crit: 3,
      uvorot: 3,
    },
  },

  12001: {
    type: 'bracelets',
    img: '/images/items/bracelets/1/11.gif',

    info: {
      title: "Страж Рекрута",
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
      crit: 3,
      uvorot: 3,
      a_uvorot: 3,
    },
  },

  12002: {
    type: 'bracelets',
    img: '/images/items/bracelets/1/12.gif',

    info: {
      title: "Карибские Наручи",
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
      a_crit: 3,
      uvorot: 3,
      a_uvorot: 3,
    },
  },

  12003: {
    type: 'bracelets',
    img: '/images/items/bracelets/1/13.gif',

    info: {
      title: "Наручи из Грубой Кожи",
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
      crit: 3,
      a_crit: 3,
      a_uvorot: 3,
    },
  },

  12004: {
    type: 'bracelets',
    img: '/images/items/bracelets/1/1.gif',

    info: {
      title: "Кожаный Браслет",
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
      hp: 5,
      pw: 5,
    },
  },
}

export default items
