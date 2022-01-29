import { useState } from '#app'
import { HeaderStore } from '~/typings/store'

export const storeStateHeader = (): {
  value: HeaderStore
} => useState<HeaderStore>('header', () => ({
  title: 'DarkWorlds',
  gameVersion: 0.001
}))
