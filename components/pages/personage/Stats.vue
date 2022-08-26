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
      <p class="h5">Уровень: {{ userInfoStore.common[BASE_INFO.LVL] }}</p>
      <p class="h5">Опыт: {{ userInfoStore.common[BASE_INFO.EXP] }} ({{ userInfoStore.common[BASE_INFO.EXP_FOR_NEXT_LEVEL] }})</p>

      <div class="h5">
        {{ getNameByKey(STATS.FREE) }}: {{ userInfoStore.stats[STATS.FREE] }}
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
              @click="userInfoStore.storeActionIncreaseStat(key)"
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
import { EquipedTypes } from '~/typings/store'
import { BASE_INFO, STATS } from '~/constants/creaturesParams'
import { useUserInfoStore } from '~/stores/user';

type FilteredUserStats = Exclude<STATS, STATS.FREE>

/** MIXINS */
const { allWearedModificators } = UserItemsMixin()

/** STORE */
const userInfoStore = useUserInfoStore()

/** COMPUTED */
const disableIncreaseStatsButton = computed(() => userInfoStore.stats[STATS.FREE] < 1)

const filteredUserStats = computed<Record<FilteredUserStats, number>>(() => {
  let copyObj = JSON.parse(JSON.stringify(userInfoStore.stats))
  delete copyObj[STATS.FREE]
  return copyObj
})

/** METHODS */
const undressAll = (): void => {
  Object.keys(userInfoStore.equipped).forEach((key: EquipedTypes): void => {
    userInfoStore.storeActionUndressItem(key)
  });
}
</script>

<style lang="scss">
</style>
