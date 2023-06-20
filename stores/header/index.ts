import { defineStore } from 'pinia'
import { GAME_NAME } from './index.constants'
import { BASE_INFO } from '~/constants/creaturesParams'
import { useUserInfoStore } from '~/stores/user'

type HeaderStore = {
  title: string
  gameVersion: number
}

export const useHeaderStore = defineStore('header', {
  state: (): HeaderStore => ({
    title: GAME_NAME,
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
