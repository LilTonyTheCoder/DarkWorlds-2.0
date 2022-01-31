import { BackEnemy } from '~/typings/enemies'
import { BASE_INFO, STATS, MODIFICATORS } from '~/constants/creaturesParams'

const items: Record<number, BackEnemy> = {
  1000: {
    info: {
      [BASE_INFO.NAME]: "Молодой волк",
      img: '/images/enemies/408.jpg',
      [BASE_INFO.LVL]: 5,
      [MODIFICATORS.HP]: 14,
      isAgressive: false,
    },

    modificators: {
      [MODIFICATORS.MIN_DAMAGE]: 10,
      [MODIFICATORS.MAX_DAMAGE]: 20,
    },

    experience: 18,

    stats: {
      [STATS.STR]: 5,
      [STATS.DEX]: 3,
      [STATS.SUC]: 8,
      [STATS.END]: 3,
      [STATS.INT]: 0,
    },
  },
}

export default items
