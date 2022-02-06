import { useState } from '#app'
import { MapSizes, PossibleMapSizes } from '~/constants/mapInfo'

export const storeStateMapBlockSize = (): {
  value: number
} => useState<number>('mapBlockSize', () => MapSizes[PossibleMapSizes.MEDIUM])

export const storeActionSetMapBlockSize = (newSize: number): void => {
  storeStateMapBlockSize().value = newSize
}
