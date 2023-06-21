import { defineStore } from 'pinia'
import { POSSIBLE_MAP_SIZES, MAP_SIZES_NEW, MOVE_DIRECTIONS, POSITIONS } from './index.constants'
import { MapSector } from '~/server/api/my-map'

const $api = async (url, options?) => {
  if (options) {
    options.body = JSON.stringify(options?.body)
  }

  const response = await fetch(url, options)
  const jsonData = await response.json()
  return jsonData
}

export const useMapStore = defineStore('map', {
  state: () => ({
    mapArray: [[]] as MapSector[][],
    oneBlockSize: MAP_SIZES_NEW[POSSIBLE_MAP_SIZES.MEDIUM].val as number,

    position: {
      [POSITIONS.X]: 0,
      [POSITIONS.Y]: 0
    }
  }),

  actions: {
    async fetchMyMap () {
      const { data } = await $api('/api/my-map')
      this.mapArray = data
    },

    setOneBlockSize (newSize: number): void {
      this.oneBlockSize = newSize
    },

    async fetchMapMove (payload: MOVE_DIRECTIONS | undefined): Promise<void> {
      const { data } = await $api('/api/map-move', {
        method: 'POST',
        body: payload
      })

      this.position = data
    }
  }
})
