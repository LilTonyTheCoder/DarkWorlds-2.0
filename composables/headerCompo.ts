import { storeStateUserInfo } from './store'
import { storeStateHeader } from './store'
import { BASE_INFO } from '~/constants/creaturesParams'

export const changeHeaderTitle = (title: string): void => {
  const storeStateHeaderLocal = storeStateHeader()
  storeStateHeaderLocal.value.title = title
}

export const resetHeaderTitle = (): void => {
  const storeStateUserInfoLocal = storeStateUserInfo()

  changeHeaderTitle(`${storeStateUserInfoLocal.value.common.name} [${storeStateUserInfoLocal.value.common[BASE_INFO.LVL]}]`)
}
