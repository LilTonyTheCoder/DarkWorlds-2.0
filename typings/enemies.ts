import { BASE_INFO, STATS, MODIFICATORS, POSITIONS } from '~/constants/creaturesParams'

export type BackEnemy = {
  info: {
    [BASE_INFO.NAME]: string
    img: string
    [BASE_INFO.LVL]: number
    [MODIFICATORS.HP]: number
    isAgressive: boolean
  }

  modificators: {
    [MODIFICATORS.MIN_DAMAGE]: number
    [MODIFICATORS.MAX_DAMAGE]: number
  }

  experience: number

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
