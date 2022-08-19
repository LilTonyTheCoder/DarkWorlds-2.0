import { BackEquipmentTypes } from '~/typings/equipments-items'
import { FINANCE_CURRENSIES } from '~/constants/userStore'
import { BASE_INFO, STATS, POSITIONS, GENDERS } from '~/constants/creaturesParams'
import { CLOTHES_MULTI } from '~/constants/clothesInfo'

export type HeaderStore = {
  title: string
  gameVersion: number
  gameName: string
}

export type UserStore = {
  common: {
    [BASE_INFO.NAME]: string
    [BASE_INFO.LVL]: number
    [BASE_INFO.CLASS]: 'Воин'
    [BASE_INFO.AVATAR]: string
    [BASE_INFO.EXP]: number
    [BASE_INFO.EXP_FOR_NEXT_LEVEL]: number
  }

  finance: Record<FINANCE_CURRENSIES, number>

  inventory: string[]

  equipped: Partial<Record<EquipedTypes, string | null>>

  stats: Record<STATS, number>

  position: Record<POSITIONS, number>

  settings: {
    gender: GENDERS
    availableAvatars: string[]
  },

  currentHPSubstractor?: number
  currentPWSubstractor?: number
}

export type EquipedTypes = BackEquipmentTypes | CLOTHES_MULTI
