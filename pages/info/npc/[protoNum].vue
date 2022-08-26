<template>
  <div class="px-5 flex flex-col">
    <div>
      <img :src="enemy.info.img" alt="">
    </div>

    <div
      v-for="(item, index) in infoToShow"
      :key="index"
      class="flex w-44 justify-between h6"
    >
      <div>{{ item.title }}: </div>
      <div>{{ item.val }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getEnemyByPrototype } from '~/backendInfo/npc'
import { BASE_INFO, STATS, MODIFICATORS } from '~/constants/creaturesParams'
import { keyNameMatch, commonNameMatch } from '~/helpers/paramsNames'
import { useHeaderStore } from '~/stores/header'

/** STORE */
const route = useRoute()
const headerStore = useHeaderStore()

/** DATA */
const PARAMS_TO_SHOW: Record<string, number> = {
  [BASE_INFO.LVL]: 5,
  [MODIFICATORS.HP]: 14,
  [MODIFICATORS.PW]: 10,

  'EMPTY1': null, // just separator

  [MODIFICATORS.MIN_DAMAGE]: 10,
  [MODIFICATORS.MAX_DAMAGE]: 20,

  'EMPTY2': null, // just separator

  [BASE_INFO.EXP]: 18,

  'EMPTY3': null, // just separator

  [STATS.STR]: 5,
  [STATS.DEX]: 3,
  [STATS.SUC]: 8,
  [STATS.END]: 3,
  [STATS.INT]: 0,
}

/** COMPUTED */
const enemy = getEnemyByPrototype(route.params.protoNum)
const enemyName = enemy.info[BASE_INFO.NAME]

const infoToShow = computed<{ title: string, val: number }[]>(() => {
  return Object.keys(PARAMS_TO_SHOW).map(key => {
    const title = keyNameMatch[key] || commonNameMatch[key] || ''
    const val = enemy[key] || enemy.info[key] || enemy.modificators[key] || enemy.stats[key] || ''

    return {
      title,
      val
    }
  })
})

/** HOOKS */
headerStore.changeTitle(enemyName);

/** META */
useMeta({
  title: `${enemyName} | Информация`
})

</script>

<style lang="scss">
</style>
