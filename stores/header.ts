import { defineStore } from 'pinia'
import { BASE_INFO } from '~/constants/creaturesParams'
import { HeaderStore } from '~/typings/store'
import { useUserInfoStore } from '~/stores/user'

export const useHeaderStore = defineStore('header', {
  state: (): HeaderStore => ({
    title: 'DarkWorlds',
    gameName: 'DarkWorlds',
    gameVersion: 0.001
  }),

  actions: {
    changeTitle (newTitle: string): void {
      this.title = newTitle
    },

    resetTitle (): void {
      const storeStateUserInfoLocal = useUserInfoStore()

      this.title = `${storeStateUserInfoLocal.common.name} [${storeStateUserInfoLocal.common[BASE_INFO.LVL]}]`
    }
  }
})
