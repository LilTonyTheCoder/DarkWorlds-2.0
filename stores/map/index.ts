import { defineStore } from 'pinia'
import { POSSIBLE_MAP_SIZES, MAP_SIZES_NEW } from './index.constants'
import { MapSector } from '~/server/api/my-map'

const $api = async (url) => {
  const response = await fetch(url)
  const jsonData = await response.json()
  return jsonData
}

export const useMapStore = defineStore('map', {
  state: () => ({
    mapArray: [[]] as MapSector[][],
    oneBlockSize: MAP_SIZES_NEW[POSSIBLE_MAP_SIZES.MEDIUM].val as number
  }),

  actions: {
    async fetchMyMap () {
      const { data } = await $api('/api/my-map')
      this.mapArray = data
    },

    setOneBlockSize (newSize: number): void {
      this.oneBlockSize = newSize
    }
  }
})
