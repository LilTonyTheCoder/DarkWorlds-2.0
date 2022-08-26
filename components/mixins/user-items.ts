import { getItemById } from '~/backendInfo/items'
import { keyNameMatch } from '~/helpers/paramsNames'
import { computed } from 'vue'
import { ClientEquipmentItem } from '~/typings/equipments-items'
import { KeyNameKeys } from '~/helpers/paramsNames'
import { useUserInfoStore } from '~/stores/user';

export default function useRepositoryNameSearch() {
  const userInfoStore = useUserInfoStore()
  const userInventory = computed(() => userInfoStore.inventory)
  const userEquipped = computed(() => userInfoStore.equipped)
  const paramsToCalc = computed(() => Object.keys(keyNameMatch))

  const allUserItemsExpanded = computed(() => {
    const arr: ClientEquipmentItem[] = []

    userInventory.value.forEach(id => {
      arr.push(getItemById(id))
    })

    return arr
  })

  const onlyWearUserItemsExpanded = computed(() => {
    return allUserItemsExpanded.value.filter((element) => {
      return Object.keys(userEquipped.value).findIndex((el) => {
        return userEquipped.value[el] === element.id
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