import { defineStore } from 'pinia'
import { storeStateUserInfo } from '~/composables/store'
import { BASE_INFO } from '~/constants/creaturesParams'
import { HeaderStore } from '~/typings/store'

export const useHeaderStore = defineStore('header', {
  state: (): HeaderStore => ({
    title: 'DarkWorlds',
    gameName: 'DarkWorlds',
    gameVersion: 0.001
  }),

  actions: {
    changeTitle(newTitle: string): void {
      this.title = newTitle
    },

    resetTitle(): void {
      const storeStateUserInfoLocal = storeStateUserInfo()

      this.title = `${storeStateUserInfoLocal.value.common.name} [${storeStateUserInfoLocal.value.common[BASE_INFO.LVL]}]`
    },
  },
})
