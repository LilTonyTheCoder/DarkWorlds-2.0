import { ClientEquipmentItem } from '~/typings/equipments-items'
import { EquipedTypes } from '~/typings/store'

type ButtonActions = 'default' | 'throwItem'

export interface PropsInterface {
  /**
   * @value "default" - put on / take off item
   * @value "throwItem" - throw item from inventory
  */
  buttonAction?: ButtonActions
  item: ClientEquipmentItem & { equippedIn: EquipedTypes }
  currentActiveTitle?: EquipedTypes
}

export type ButtonStrategy = Record<ButtonActions,
  Record<'true' | 'false', {
    text: string
    handler: Function
  }>
>
