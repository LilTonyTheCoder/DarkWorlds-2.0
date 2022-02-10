import UserItemsMixin from '~/components/mixins/user-items'
import { BASE_INFO, STATS, MODIFICATORS } from '~/constants/creaturesParams'

export const storeGetterUserMaxHP = computed<number>(() => {
  const { allWearedModificators } = UserItemsMixin()

  const hpFromLvl = storeStateUserInfo().value.common[BASE_INFO.LVL] * 6
  const hpFromStats = storeStateUserInfo().value.stats[STATS.END] * 6
  const hpFromModificators = allWearedModificators.value[MODIFICATORS.HP]

  return hpFromLvl + hpFromStats + hpFromModificators
})

export const currentHPSubstractor = ref(0)

export const storeGetterUserCurrentHP = computed<number>(() => {
  return storeGetterUserMaxHP.value - currentHPSubstractor.value
})

export const storeGetterUserMaxPW = computed<number>(() => {
  const { allWearedModificators } = UserItemsMixin()

  const pwFromStats = storeStateUserInfo().value.stats[STATS.STR] * 6
  const pwFromModificators = allWearedModificators.value[MODIFICATORS.PW]

  return pwFromStats + pwFromModificators
})

export const currentPWSubstractor = ref(0)

export const storeGetterUserCurrentPW = computed<number>(() => {
  return storeGetterUserMaxPW.value - currentPWSubstractor.value
})