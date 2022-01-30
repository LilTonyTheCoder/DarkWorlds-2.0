import { storeStateUserInfo } from './store'
import { storeStateHeader } from './store'



export const changeHeaderTitle = (title: string): void => {
  const storeStateHeaderLocal = storeStateHeader()
  storeStateHeaderLocal.value.title = title
}

export const resetHeaderTitle = (): void => {
  const storeStateUserInfoLocal = storeStateUserInfo()

  changeHeaderTitle(`${storeStateUserInfoLocal.value.common.name} [${storeStateUserInfoLocal.value.common.lvl}]`)
}
