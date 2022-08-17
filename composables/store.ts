export {
  storeStateHeader
} from './store/header'

export {
  storeStateUserInfo,

  storeActionMapMove,
  storeActionDressItem,
  storeActionUndressItem,
  storeActionThrowItemFromInventory,
  storeActionPutOnAvatar,
  storeActionIncreaseStat
} from './store/user'

export {
  storeGetterUserCurrentHP,
  storeGetterUserMaxHP,

  storeGetterUserCurrentPW,
  storeGetterUserMaxPW
} from './store/userGetters'

export {
  storeStateMapBlockSize,
  storeActionSetMapBlockSize
} from './store/map'
