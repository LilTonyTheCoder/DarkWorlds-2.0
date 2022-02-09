<template>
  <div>
    <UIButton
      size="M"
      @click="undressAll"
    >
      Снять все
    </UIButton>

    <div class="h-4" />

    <div>
      <p class="h5">Уровень: {{ userCommon[BASE_INFO.LVL] }}</p>
      <p class="h5">Опыт: {{ userCommon[BASE_INFO.EXP] }} ({{ userCommon[BASE_INFO.EXP_FOR_NEXT_LEVEL] }})</p>

      <div class="h5">
        {{ getNameByKey(STATS.FREE) }}: {{ userStats[STATS.FREE] }}
      </div>
    </div>

    <div class="h-9" />

    <UICollapse title="Характеристики">
      <div
        v-for="(stat, key, index) in filteredUserStats"
        :key="index"
        class="flex items-center justify-between h-9"
      >
        <div class="item__text">
          {{ getNameByKey(key) }}
        </div>

        <div class="item__right flex">
          <div class="item__num w-24 text-right pr-3">
            <b>{{ stat + allWearedModificators[key] }}</b>
            <span v-if="allWearedModificators[key]">
              ( {{ stat }} + {{ allWearedModificators[key] }} )
            </span>
          </div>

          <div class="flex justify-center items-center">
            <UIButton
              v-if="!disableIncreaseStatsButton"
              size="S"
              icon-only
              @click="storeActionIncreaseStat(key)"
            >
              +
            </UIButton>
            <!-- <el-button size="mini" circle>-</el-button> -->
          </div>
        </div>
      </div>
    </UICollapse>
  </div>
</template>

<script lang='ts' setup>
import { getNameByKey } from '~/helpers/paramsNames'
import UserItemsMixin from '~/components/mixins/user-items'
import { ref, computed } from 'vue'
import { storeActionUndressItem, storeActionIncreaseStat } from '~/composables/store'
import { EquipedTypes } from '~/typings/store'
import { BASE_INFO, STATS } from '~/constants/creaturesParams'

type FilteredUserStats = Exclude<STATS, STATS.FREE>

const { allWearedModificators } = UserItemsMixin()

const userState = storeStateUserInfo()
const userStats = computed(() => userState.value.stats)
const userCommon = computed(() => userState.value.common)
const userEquipped = computed(() => userState.value.equipped)

const disableIncreaseStatsButton = computed(() => userStats.value[STATS.FREE] < 1)

const filteredUserStats = computed<Record<FilteredUserStats, number>>(() => {
  let copyObj = JSON.parse(JSON.stringify(userStats.value))
  delete copyObj[STATS.FREE]
  return copyObj
})

const undressAll = (): void => {
  Object.keys(userEquipped.value).forEach((key: EquipedTypes): void => {
    storeActionUndressItem(key)
  });
}
</script>

<style lang="scss">
</style>
