import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  11000: {
    type: 'weapon',
    img: '/images/items/weapon/dubina/1/2.gif',

    info: {
      title: "Волчий Голод",
      priceGold: 14,
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
      a_crit: 3,
      a_uvorot: 3,
      min_damage: 4,
      max_damage: 8,
    },
  },

  11001: {
    type: 'weapon',
    img: '/images/items/weapon/dubina/1/3.gif',

    info: {
      title: "Усмиряющая Дубина",
      priceGold: 14,
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
      a_crit: 4,
      a_uvorot: 4,
      min_damage: 3,
      max_damage: 8,
    },
  },

  11002: {
    type: 'weapon',
    img: '/images/items/weapon/dubina/1/4.gif',

    info: {
      title: "Тонфу",
      priceGold: 14,
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
      a_crit: 4,
      a_uvorot: 4,
      min_damage: 4,
      max_damage: 7,
    },
  },
}

export default items
