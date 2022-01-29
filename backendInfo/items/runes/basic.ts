import { BackEquipmentItem } from '~/typings/equipments-items'

const items: Record<number, BackEquipmentItem> = {
  13000: {
    type: 'rune',
    img: '/images/items/runes/basic/11.gif',

    info: {
      title: "Малое исцеление",
      priceGold: 1,
      maxDurability: 2,
    },

    require: {
      lvl: 3,
      int: 3,
    },

    action: {
      name: 'hpHeal',
      val: 25,
      use_chance: 80,
    },
  },

  13001: {
    type: 'rune',
    img: '/images/items/runes/basic/15.gif',

    info: {
      title: "Малое восстановление",
      priceGold: 1,
      maxDurability: 2,
    },

    require: {
      lvl: 3,
      int: 3,
    },

    action: {
      name: 'pwHeal',
      val: 25,
      use_chance: 80,
    },
  },

  13002: {
    type: 'rune',
    img: '/images/items/runes/basic/12.gif',

    info: {
      title: "Среднее исцеление",
      priceGold: 2,
      maxDurability: 2,
    },

    require: {
      lvl: 5,
      int: 5,
    },

    action: {
      name: 'hpHeal',
      val: 50,
      use_chance: 80,
    },
  },
}

export default items
