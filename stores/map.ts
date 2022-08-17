import { defineStore } from 'pinia'
import { MapSizes, PossibleMapSizes } from '~/constants/mapInfo'

export const useMapStore = defineStore('map', {
  state: () => ({
    oneBlockSize: MapSizes[PossibleMapSizes.MEDIUM] as number
  }),

  actions: {
    setOneBlockSize(newSize: number): void {
      this.oneBlockSize = newSize
    },
  },
})
