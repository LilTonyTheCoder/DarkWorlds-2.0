import { useState } from '#app'
import { UserStore } from '~/typings/store'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

import { EquipedTypes } from '~/typings/store'
import { BASE_INFO, STATS, POSITIONS, GENDERS } from '~/constants/creaturesParams'
import { CLOTHES, CLOTHES_MULTI } from '~/constants/clothesInfo'

export const storeStateUserInfo = (): {
  value: UserStore
} => useState<UserStore>('userInfo', () => (
  {
    common: {
      [BASE_INFO.NAME]: 'Антоп',
      [BASE_INFO.LVL]: 17,
      [BASE_INFO.CLASS]: 'Воин',
      [BASE_INFO.AVATAR]: '/images/avatars/male/common/0_0_M014.jpg',
      [BASE_INFO.EXP]: 27270,
      [BASE_INFO.EXP_FOR_NEXT_LEVEL]: 31300,
    },

    finance: {
      [FINANCE_CURRENSIES.GOLD]: 103,
      [FINANCE_CURRENSIES.PLATINUM]: 5,
      [FINANCE_CURRENSIES.SILVER]: 4,
    },

    inventory: [
      '9d25fcc91',
      'fd4671480',
      '4e296a910',
      '83fd36c63',
      '1dd1e64bd',
      '549fd6c44',
      '718927374',
      '9a8f46c04',
      '30fa7d31b',
      'da633c992',
      '3f3605816',
      'cd8c2814a',
      '649aaf74f',
      '48e7afd73',
      '741ea426e',
      'f553bdb9b',
    ],

    equipped: {
      [CLOTHES.HELMET]: '9d25fcc91',
      [CLOTHES.WEAPON]: 'cd8c2814a',
      [CLOTHES.ARMOR]: null,

      [CLOTHES.EARRINGS]: null,
      [CLOTHES.NECKLACE]: null,
      [CLOTHES.GLOVES]: null,
      [CLOTHES.BRACELETS]: null,
      [CLOTHES.SHIELD]: null,
      [CLOTHES.BOOTS]: null,
      [CLOTHES.BELT]: null,

      [CLOTHES_MULTI.R_1]: null,
      [CLOTHES_MULTI.R_2]: null,
      [CLOTHES_MULTI.R_3]: null,
      [CLOTHES_MULTI.R_4]: null,

      [CLOTHES_MULTI.STONE_1]: null,
      [CLOTHES_MULTI.STONE_2]: null,
      [CLOTHES_MULTI.STONE_3]: null,
      [CLOTHES_MULTI.STONE_4]: null,
      [CLOTHES_MULTI.STONE_5]: null,
      [CLOTHES_MULTI.STONE_6]: null,
      [CLOTHES_MULTI.STONE_7]: null,

      [CLOTHES_MULTI.RUNE_1]: null,
      [CLOTHES_MULTI.RUNE_2]: null,
      [CLOTHES_MULTI.RUNE_3]: null,
      [CLOTHES_MULTI.RUNE_4]: null,
      [CLOTHES_MULTI.RUNE_5]: null,
      [CLOTHES_MULTI.RUNE_6]: null,
    },

    stats: {
      [STATS.STR]: 1,
      [STATS.DEX]: 1,
      [STATS.SUC]: 2,
      [STATS.END]: 7,
      [STATS.INT]: 0,
      [STATS.FREE]: 2,
    },

    position: {
      [POSITIONS.X]: 5,
      [POSITIONS.Y]: 5,
    },

    settings: {
      gender: GENDERS.MALE,
      availableAvatars: [
        '/common/0_0_M000.jpg',
        '/common/0_0_M001.jpg',
        '/common/0_0_M002.jpg',
        '/common/0_0_M003.jpg',
        '/common/0_0_M004.jpg',
        '/common/0_0_M005.jpg',
        '/common/0_0_M006.jpg',
        '/common/0_0_M007.jpg',
        '/common/0_0_M008.jpg',
        '/common/0_0_M009.jpg',
        '/common/0_0_M010.jpg',
        '/common/0_0_M011.jpg',
        '/common/0_0_M012.jpg',
        '/common/0_0_M013.jpg',
        '/common/0_0_M014.jpg',
        '/common/0_0_M015.jpg',
      ],
    },
  }
))

export const storeActionMapMove = (payload: '↑' | '←' | '→' | '↓'): void => {
  switch (payload) {
    case '↑':
      storeStateUserInfo().value.position[POSITIONS.Y] -= 1
      break
    case '←':
      storeStateUserInfo().value.position[POSITIONS.X] -= 1
      break
    case '→':
      storeStateUserInfo().value.position[POSITIONS.X] += 1
      break
    case '↓':
      storeStateUserInfo().value.position[POSITIONS.Y] += 1
      break
  }
}

export const storeActionDressItem = (payload: { type: EquipedTypes, id: string }) => {
  storeStateUserInfo().value.equipped[payload.type] = payload.id
}
export const storeActionUndressItem = (itemType: EquipedTypes) => {
  storeStateUserInfo().value.equipped[itemType] = null
}
export const storeActionThrowItemFromInventory = (payload: string) => {
  storeStateUserInfo().value.inventory = storeStateUserInfo().value.inventory.filter(el => el !== payload)
}

export const storeActionPutOnAvatar = (payload: string) => {
  storeStateUserInfo().value.common.avatar = payload
}
export const storeActionIncreaseStat = (payload: STATS) => {
  if (storeStateUserInfo().value.stats[STATS.FREE] < 1) return

  storeStateUserInfo().value.stats[payload] += 1
  storeStateUserInfo().value.stats[STATS.FREE] -= 1
}
