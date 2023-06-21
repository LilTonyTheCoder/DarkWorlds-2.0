import { BASE_INFO, STATS, MODIFICATORS } from '~/constants/creaturesParams'
import { POSITIONS } from '~/stores/map/index.constants'

export type BackEnemy = {
  info: {
    [BASE_INFO.NAME]: string
    img: string
    [BASE_INFO.LVL]: number
    [MODIFICATORS.HP]: number
    [MODIFICATORS.PW]: number
    isAgressive: boolean
  }

  modificators: {
    [MODIFICATORS.MIN_DAMAGE]: number
    [MODIFICATORS.MAX_DAMAGE]: number
  }

  [BASE_INFO.EXP]: number

  stats: {
    [STATS.STR]: number
    [STATS.DEX]: number
    [STATS.SUC]: number
    [STATS.END]: number
    [STATS.INT]: number
  }
}

export type UniqEnemyParams = {
  prototype: number
} & Record<'defaultPosition' | 'currentPosition', { [POSITIONS.X]: number; [POSITIONS.Y]: number}>

export type FullEnemyParams = BackEnemy & UniqEnemyParams & { id: string }
