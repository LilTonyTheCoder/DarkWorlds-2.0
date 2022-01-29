import { StatsTypes } from '~/typings/store'

export type ModificatorsType =
  'pw' |
  'hp' |
  'crit' |
  'uvorot' |
  'a_uvorot' |
  'a_crit' |
  'armor_head' |
  'armor_body' |
  'armor_waist' |
  'armor_legs' |
  'min_damage' |
  'max_damage'

export type BackEquipmentProps = StatsTypes | ModificatorsType

export type BackEquipmentRequires =
  StatsTypes |
  'lvl' |
  'maxWear'

export type BackEquipmentMultitypes = 'rune' | 'stone' | 'ring';

export type BackEquipmentTypes =
  BackEquipmentMultitypes |
  'shield' |
  'helmet' |
  'boots' |
  'belt' |
  'armor' |
  'earrings' |
  'necklace' |
  'gloves' |
  'weapon' |
  'bracelets'

export type BackEquipmentActionsName =
  'pwHeal' |
  'hpHeal'

export type BackEquipmentItem = {
  type: BackEquipmentTypes

  img: string

  info: {
    title: string
    priceGold?: number
    maxDurability: number
    pricePlatinum?: number
  },

  require?: Partial<Record<BackEquipmentRequires, number>>

  props?: Partial<Record<BackEquipmentProps, number>>

  action?: {
    name: 'pwHeal' | 'hpHeal'
    val: number
    use_chance: number
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
