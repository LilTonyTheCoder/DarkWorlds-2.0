import { defineStore } from 'pinia'
import { $api } from '~/helpers/api'

type InsideAreaStore = {
  info: {
    name: string
    description: string
    img: string
  }
}

export const useInsideArea = defineStore('insideArea', {
  state: (): InsideAreaStore => ({
    info: {
      name: null,
      description: null,
      img: null
    }
  }),

  actions: {
    async fetchInsideArea () {
      const { data } = await $api('/api/inside-area')

      this.info = data
    }
  }
})
