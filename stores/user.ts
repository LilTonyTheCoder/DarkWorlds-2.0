import { defineStore } from 'pinia'
import { UserStore } from '~/typings/store'
import { BASE_INFO, STATS, POSITIONS, GENDERS, MODIFICATORS } from '~/constants/creaturesParams'
import { FINANCE_CURRENSIES } from '~/constants/userStore'
import { CLOTHES, CLOTHES_MULTI } from '~/constants/clothesInfo'
import { EquipedTypes } from '~/typings/store'
import UserItemsMixin from '~/components/mixins/user-items'

export const useUserInfoStore = defineStore('userInfoPinia', {
  state: (): UserStore => ({
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

    currentHPSubstractor: 0,
    currentPWSubstractor: 0
  }),

  getters: {
    storeGetterUserMaxHP: (state): number => {
      const { allWearedModificators } = UserItemsMixin()

      const hpFromLvl = state.common[BASE_INFO.LVL] * 6
      const hpFromStats = state.stats[STATS.END] * 6
      const hpFromModificators = allWearedModificators.value[MODIFICATORS.HP]

      return hpFromLvl + hpFromStats + hpFromModificators
    },

    storeGetterUserCurrentHP: (state): number => {
      return useUserInfoStore().storeGetterUserMaxHP - state.currentHPSubstractor;
    },

    storeGetterUserMaxPW: (state): number => {
      const { allWearedModificators } = UserItemsMixin()

      const pwFromStats = state.stats[STATS.STR] * 6
      const pwFromModificators = allWearedModificators.value[MODIFICATORS.PW]

      return pwFromStats + pwFromModificators
    },

    storeGetterUserCurrentPW: (state): number => {
      return useUserInfoStore().storeGetterUserMaxPW - state.currentPWSubstractor
    }
  },

  actions: {
    setOneBlockSize(newSize: number): void { // TEST
      this.oneBlockSize = newSize
    },

    storeActionMapMove(payload: '↑' | '←' | '→' | '↓'): void {
      switch (payload) {
        case '↑':
          this.position[POSITIONS.Y] -= 1
          break
        case '←':
          this.position[POSITIONS.X] -= 1
          break
        case '→':
          this.position[POSITIONS.X] += 1
          break
        case '↓':
          this.position[POSITIONS.Y] += 1
          break
      }
    },

    storeActionDressItem(payload: { type: EquipedTypes, id: string }) {
      this.equipped[payload.type] = payload.id
    },

    storeActionUndressItem(itemType: EquipedTypes) {
      this.equipped[itemType] = null
    },

    storeActionThrowItemFromInventory(payload: string) {
      this.inventory = this.inventory.filter(el => el !== payload)
    },

    storeActionPutOnAvatar(payload: string) {
      this.common.avatar = payload
    },

    storeActionIncreaseStat(payload: STATS) {
      if (this.stats[STATS.FREE] < 1) return

      this.stats[payload] += 1
      this.stats[STATS.FREE] -= 1
    }
  },
})
