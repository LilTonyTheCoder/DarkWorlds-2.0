import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  6000: {
    type: 'armor',
    img: '/images/items/armor/1/28.gif',

    info: {
      title: "Полуночный Жилет",
      priceGold: 8,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 3,
      dex: 5,
      suc: 5,
      end: 3,
    },

    props: {
      crit: 3,
      a_crit: 3,
      uvorot: 3,
      a_uvorot: 3,
      armor_body: 2,
    },
  },

  6001: {
    type: 'armor',
    img: '/images/items/armor/1/29.gif',

    info: {
      title: "Полуденный Жилет",
      priceGold: 8,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 5,
      dex: 5,
      suc: 5,
      end: 5,
    },

    props: {
      str: 1,
      armor_body: 3,
    },
  },

  6002: {
    type: 'armor',
    img: '/images/items/armor/1/27.gif',

    info: {
      title: "Легкий Колет",
      priceGold: 8,
      maxDurability: 20,
    },

    require: {
      lvl: 1,
      str: 6,
      dex: 3,
      suc: 3,
      end: 6,
    },

    props: {
      hp: 5,
      pw: 5,
      armor_body: 5,
    },
  },
}

export default items
