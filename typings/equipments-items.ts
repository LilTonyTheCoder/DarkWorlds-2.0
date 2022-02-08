import { STATS, MODIFICATORS, BASE_INFO } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_STATS, RUNES_ACTIONS } from '~/constants/clothesInfo'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

export type BackEquipmentProps = STATS | MODIFICATORS

export type BackEquipmentRequires =
  STATS |
  BASE_INFO.LVL |
  CLOTHES_STATS.MAX_POSSIBLE_WEAR

export type BackEquipmentMultitypes = 'rune' | 'stone' | 'ring';

export type BackEquipmentTypes = BackEquipmentMultitypes | CLOTHES

export type BackEquipmentItem = {
  type: BackEquipmentTypes

  img: string

  info: {
    title: string
    [FINANCE_CURRENSIES.GOLD]?: number
    [FINANCE_CURRENSIES.PLATINUM]?: number
    [CLOTHES_STATS.MAX_DURABILITY]: number
  },

  require?: Partial<Record<BackEquipmentRequires, number>>

  props?: Partial<Record<BackEquipmentProps, number>>

  action?: {
    name: RUNES_ACTIONS
    val: number
    [CLOTHES_STATS.USE_CHANCE]: number
  },
}

export type UniqEquipmentParams = {
  prototype: number
  durability: number
}

export type EquipmentId = {
  id: string
}

export type ClientEquipmentItem = BackEquipmentItem & UniqEquipmentParams & EquipmentId
