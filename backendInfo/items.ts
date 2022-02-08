import { CLOTHES_STATS } from '~/constants/clothesInfo'

import helmet_1 from './items/helmets/1' // 1000 - 1005
import boots_1 from './items/boots/1' // 2000 - 2005
import belts_1 from './items/belts/1' // 3000 - 3004
import rings_1 from './items/rings/1' // 4000 - 4005
import stones_regular from './items/stones/regular' // 5000 - 5006
import armor_1 from './items/armor/1' // 6000 - 6002
import earrings_2 from './items/earrings/2' // 7000 - 7005
import necklace_2 from './items/necklace/2' // 8000 - 8005
import gloves_2 from './items/gloves/2' // 9000 - 9005
import shield_1 from './items/shields/1' // 10000 - 10005
import dubina_1 from './items/weapon/dubina/1' // 11000 - 11002
import bracelets_1 from './items/bracelets/1' // 12000 - 12004
import runes_basic from './items/runes/basic' // 13000 - 13002

import { UniqEquipmentParams, BackEquipmentItem, ClientEquipmentItem } from '~/typings/equipments-items'

export const usersItems: Record<string, UniqEquipmentParams> = {
  '9d25fcc91': { prototype: 1000, [CLOTHES_STATS.DURABILITY]: 24 },
  'fd4671480': { prototype: 1001, [CLOTHES_STATS.DURABILITY]: 24 },
  '1dd1e64bd': { prototype: 2000, [CLOTHES_STATS.DURABILITY]: 20 },
  '4e296a910': { prototype: 3000, [CLOTHES_STATS.DURABILITY]: 20 },
  '83fd36c63': { prototype: 4000, [CLOTHES_STATS.DURABILITY]: 20 },
  '549fd6c44': { prototype: 5000, [CLOTHES_STATS.DURABILITY]: 9 },
  '718927374': { prototype: 6000, [CLOTHES_STATS.DURABILITY]: 9 },
  '9a8f46c04': { prototype: 7000, [CLOTHES_STATS.DURABILITY]: 9 },
  '30fa7d31b': { prototype: 8000, [CLOTHES_STATS.DURABILITY]: 9 },
  'da633c992': { prototype: 9000, [CLOTHES_STATS.DURABILITY]: 9 },
  '3f3605816': { prototype: 10000, [CLOTHES_STATS.DURABILITY]: 9 },
  'cd8c2814a': { prototype: 11000, [CLOTHES_STATS.DURABILITY]: 9 },
  '649aaf74f': { prototype: 12000, [CLOTHES_STATS.DURABILITY]: 9 },
  '48e7afd73': { prototype: 13000, [CLOTHES_STATS.DURABILITY]: 2 },
  '741ea426e': { prototype: 13001, [CLOTHES_STATS.DURABILITY]: 2 },
  'f553bdb9b': { prototype: 13002, [CLOTHES_STATS.DURABILITY]: 2 },
}

export const prototypes: Record<number, BackEquipmentItem> = {
  ...helmet_1,
  ...boots_1,
  ...belts_1,
  ...rings_1,
  ...stones_regular,
  ...runes_basic,
  ...armor_1,
  ...shield_1,
  ...bracelets_1,

  ...dubina_1,

  ...earrings_2,
  ...necklace_2,
  ...gloves_2,
}

export const getItemById = (id: string): ClientEquipmentItem => {
  return {
    id,
    ...usersItems[id],
    ...prototypes[usersItems[id].prototype],
  }
}
