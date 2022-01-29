export type BackEnemy = {
  info: {
    name: string
    img: string
    lvl: number
    default_hp: number
  }

  damage: {
    min: number
    max: number
  }

  experience: number
  defence: number
  magical_defence: number
  accuracy: number
  dodge: number
  isAgressive: boolean

  stats: {
    str: number
    dex: number
    suc: number
    end: number
    int: number
  }

  possible_drop: number[]
}

export type UniqEnemyParams = {
  prototype: number
} & Record<'defaultPosition' | 'currentPosition', { x: number; y: number}>

export type FullEnemyParams = BackEnemy & UniqEnemyParams & { id: string }
