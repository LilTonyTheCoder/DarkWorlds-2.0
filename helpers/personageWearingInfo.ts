import { EquipedTypes } from '~/typings/store'
import { BackEquipmentMultitypes } from '~/typings/equipments-items'
import { CLOTHES, CLOTHES_MULTI } from '~/constants/clothesInfo'

export type WearingInfo = {
  title: CLOTHES | CLOTHES_MULTI
  styleClass?: string
  type?: CLOTHES.RING | CLOTHES.STONE | CLOTHES.RUNE
}

export const leftSideItems: WearingInfo[] = [
  { title: CLOTHES.HELMET, styleClass: 'inventory__item--helmet' },
  { title: CLOTHES.WEAPON, styleClass: 'inventory__item--double' },
  { title: CLOTHES.ARMOR, styleClass: 'inventory__item--triple' },
  { title: CLOTHES_MULTI.R_1, type: CLOTHES.RING, styleClass: 'inventory__item--ring inventory__item--ring--grow' },
  { title: CLOTHES_MULTI.R_2, type: CLOTHES.RING, styleClass: 'inventory__item--ring' },
  { title: CLOTHES.BELT },
]
export const rightSideItems: WearingInfo[] = [
  { title: CLOTHES.EARRINGS },
  { title: CLOTHES.NECKLACE },
  { title: CLOTHES.BRACELETS },
  { title: CLOTHES.GLOVES },
  { title: CLOTHES.SHIELD, styleClass: 'inventory__item--double' },
  { title: CLOTHES_MULTI.R_3, type: CLOTHES.RING, styleClass: 'inventory__item--ring' },
  { title: CLOTHES_MULTI.R_4, type: CLOTHES.RING, styleClass: 'inventory__item--ring inventory__item--ring--grow' },
  { title: CLOTHES.BOOTS, styleClass: 'inventory__item--boots' },
]
export const stones: WearingInfo[] = [
  { title: CLOTHES_MULTI.STONE_1, type: CLOTHES.STONE },
  { title: CLOTHES_MULTI.STONE_2, type: CLOTHES.STONE },
  { title: CLOTHES_MULTI.STONE_3, type: CLOTHES.STONE },
  { title: CLOTHES_MULTI.STONE_4, type: CLOTHES.STONE },
  { title: CLOTHES_MULTI.STONE_5, type: CLOTHES.STONE },
  { title: CLOTHES_MULTI.STONE_6, type: CLOTHES.STONE },
  { title: CLOTHES_MULTI.STONE_7, type: CLOTHES.STONE },
]
export const runesTop: WearingInfo[] = [
  { title: CLOTHES_MULTI.RUNE_1, type: CLOTHES.RUNE },
  { title: CLOTHES_MULTI.RUNE_2, type: CLOTHES.RUNE },
  { title: CLOTHES_MULTI.RUNE_3, type: CLOTHES.RUNE },
]
export const runesBottom: WearingInfo[] = [
  { title: CLOTHES_MULTI.RUNE_4, type: CLOTHES.RUNE },
  { title: CLOTHES_MULTI.RUNE_5, type: CLOTHES.RUNE },
  { title: CLOTHES_MULTI.RUNE_6, type: CLOTHES.RUNE },
]
