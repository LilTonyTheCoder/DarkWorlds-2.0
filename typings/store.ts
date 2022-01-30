import { BackEquipmentTypes } from '~/typings/equipments-items'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

export type HeaderStore = {
  title: string
  gameVersion: number
  gameName: string
}

export type UserStore = {
  common: {
    name: string
    lvl: number
    class: 'Воин'
    avatar: string
    exp: number
    needExp: number
  }

  finance: Record<FINANCE_CURRENSIES, number>

  inventory: string[]

  equipped: Partial<Record<EquipedTypes, string | null>>

  stats: Record<StatsTypes, number>

  position: {
    x: number
    y: number
  }

  settings: {
    gender: 'male' | 'female'
    availableAvatars: string[]
  },
}

export type StatsTypes =
  'str' |
  'dex' |
  'suc' |
  'end' |
  'int' |
  'free'

export type EquipedTypes =
  BackEquipmentTypes |
  'r1' |
  'r2' |
  'r3' |
  'r4' |

  'stone1' |
  'stone2' |
  'stone3' |
  'stone4' |
  'stone5' |
  'stone6' |
  'stone7' |

  'rune1' |
  'rune2' |
  'rune3' |
  'rune4' |
  'rune5' |
  'rune6'
