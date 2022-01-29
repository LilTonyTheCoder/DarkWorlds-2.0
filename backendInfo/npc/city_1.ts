import { BackEnemy } from '~/typings/enemies'

const items: Record<number, BackEnemy> = {
  1000: {
    info: {
      name: "Молодой волк",
      img: '/images/enemies/408.jpg',
      lvl: 5,
      default_hp: 14,
    },

    damage: {
      min: 11,
      max: 14,
    },

    experience: 18,
    defence: 31,
    magical_defence: 11,
    accuracy: 178,
    dodge: 109,
    isAgressive: false,

    stats: {
      str: 5,
      dex: 3,
      suc: 8,
      end: 3,
      int: 0,
    },

    possible_drop: [5000, 5001],
  },
}

export default items
