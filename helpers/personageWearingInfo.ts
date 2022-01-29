import { EquipedTypes } from '~/typings/store'
import { BackEquipmentMultitypes } from '~/typings/equipments-items'

export type WearingInfo = {
  title: EquipedTypes
  styleClass?: string
  type?: BackEquipmentMultitypes
}

export const leftSideItems: WearingInfo[] = [
  { title: 'helmet', styleClass: 'inventory__item--helmet' },
  { title: 'weapon', styleClass: 'inventory__item--double' },
  { title: 'armor', styleClass: 'inventory__item--triple' },
  { title: 'r1', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
  { title: 'r2', type: 'ring', styleClass: 'inventory__item--ring' },
  { title: 'belt' },
]
export const rightSideItems: WearingInfo[] = [
  { title: 'earrings' },
  { title: 'necklace' },
  { title: 'bracelets' },
  { title: 'gloves' },
  { title: 'shield', styleClass: 'inventory__item--double' },
  { title: 'r3', type: 'ring', styleClass: 'inventory__item--ring' },
  { title: 'r4', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
  { title: 'boots', styleClass: 'inventory__item--boots' },
]
export const stones: WearingInfo[] = [
  { title: 'stone1', type: 'stone' },
  { title: 'stone2', type: 'stone' },
  { title: 'stone3', type: 'stone' },
  { title: 'stone4', type: 'stone' },
  { title: 'stone5', type: 'stone' },
  { title: 'stone6', type: 'stone' },
  { title: 'stone7', type: 'stone' },
]
export const runesTop: WearingInfo[] = [
  { title: 'rune1', type: 'rune' },
  { title: 'rune2', type: 'rune' },
  { title: 'rune3', type: 'rune' },
]
export const runesBottom: WearingInfo[] = [
  { title: 'rune4', type: 'rune' },
  { title: 'rune5', type: 'rune' },
  { title: 'rune6', type: 'rune' },
]
