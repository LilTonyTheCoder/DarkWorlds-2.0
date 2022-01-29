import { useState } from '#app'

export const storeStateLeftMenu = (): {
  value: boolean
} => useState<boolean>('leftMenu', () => false)
export const storeActionToggleLeftMenu = (): void => {
  storeStateLeftMenu().value = !storeStateLeftMenu().value
}
