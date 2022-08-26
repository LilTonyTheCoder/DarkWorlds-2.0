import { getItemById } from '~/backendInfo/items'
import { keyNameMatch } from '~/helpers/paramsNames'
import { computed } from 'vue'
import { ClientEquipmentItem } from '~/typings/equipments-items'
import { KeyNameKeys } from '~/helpers/paramsNames'
import { useUserInfoStore } from '~/stores/user';

export default function useRepositoryNameSearch() {
  /** STORE */
  const userInfoStore = useUserInfoStore()

  /** COMPUTED */
  const paramsToCalc = computed(() => Object.keys(keyNameMatch))

  const allUserItemsExpanded = computed(() => {
    const arr: ClientEquipmentItem[] = []

    userInfoStore.inventory.forEach(id => {
      arr.push(getItemById(id))
    })

    return arr
  })

  const onlyWearUserItemsExpanded = computed(() => {
    return allUserItemsExpanded.value.filter((element) => {
      return Object.keys(userInfoStore.equipped).findIndex((el) => {
        return userInfoStore.equipped[el] === element.id
      }) !== -1
    })
  })

  const allWearedModificators = computed<Partial<Record<KeyNameKeys, number>>>(() => {
    const outputObj = {}

    paramsToCalc.value.forEach((key) => {
      let value = 0

      onlyWearUserItemsExpanded.value.forEach(item => {
        value += item.props && item.props[key] || 0
      })

      outputObj[key] = value
    })

    return outputObj
  })

  return {
    allUserItemsExpanded,
    allWearedModificators,
  }
}