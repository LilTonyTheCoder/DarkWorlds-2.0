import { useState } from '#app'
import { UserStore } from '~/typings/store'
import { FINANCE_CURRENSIES } from '~/constants/userStore'

import { EquipedTypes, StatsTypes } from '~/typings/store'

export const storeStateUserInfo = (): {
  value: UserStore
} => useState<UserStore>('userInfo', () => (
  {
    common: {
      name: 'Антоп',
      lvl: 17,
      class: 'Воин',
      avatar: '/images/avatars/male/common/0_0_M014.jpg',
      exp: 27270,
      needExp: 31300,
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
      helmet: '9d25fcc91',
      weapon: 'cd8c2814a',
      armor: null,

      earrings: null,
      necklace: null,
      gloves: null,
      bracelets: null,
      r1: null,
      r2: null,
      r3: null,
      r4: null,
      shield: null,
      boots: null,
      belt: null,

      stone1: null,
      stone2: null,
      stone3: null,
      stone4: null,
      stone5: null,
      stone6: null,
      stone7: null,

      rune1: null,
      rune2: null,
      rune3: null,
      rune4: null,
      rune5: null,
      rune6: null,
    },

    stats: {
      str: 1,
      dex: 1,
      suc: 2,
      end: 7,
      int: 0,
      free: 2,
    },

    position: {
      x: 5,
      y: 5,
    },

    settings: {
      gender: 'male',
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
      storeStateUserInfo().value.position.y -= 1
      break
    case '←':
      storeStateUserInfo().value.position.x -= 1
      break
    case '→':
      storeStateUserInfo().value.position.x += 1
      break
    case '↓':
      storeStateUserInfo().value.position.y += 1
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
export const storeActionIncreaseStat = (payload: StatsTypes) => {
  if (storeStateUserInfo().value.stats.free < 1) return

  storeStateUserInfo().value.stats[payload] += 1
  storeStateUserInfo().value.stats.free -= 1
}
