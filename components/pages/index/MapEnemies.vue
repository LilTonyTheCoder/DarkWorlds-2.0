<template>
  <div>
    <UICollapse
      :title="`Монстры (${enemiesListArray.length}):`"
    >
      <div
        v-for="item in enemiesListArray"
        :key="item.id"
        class="flex w-100 h-16 mb-4 "
      >
        <img
          :src="item.info.img"
          class="cursor-pointer mr-4 w-12"
          :alt="item.info.name"
          @click="openItemInfo(item.prototype)"
        >

        <div class="flex flex-grow flex-column">
          <div class="h5 font-bold">
            {{ item.info[BASE_INFO.NAME] }} [{{ item.info[BASE_INFO.LVL] }}]

            <i
              v-if="item.isAgressive"
              :class="['bi bi-asterisk text-red', $style.asterisk]"
            />
          </div>

          <div class="h6">
            HP: {{ item.info[MODIFICATORS.HP] }}
          </div>

          <div class="h6">
            Урон: {{ item.modificators[MODIFICATORS.MIN_DAMAGE] }} - {{ item.modificators[MODIFICATORS.MAX_DAMAGE] }}
          </div>
        </div>

        <div class="flex align-center justify-center mr-1">
          <UIButton
            icon-only
            variant="text"
          >
            <i class="bi bi-hand-index" />
          </UIButton>
        </div>
      </div>
    </UICollapse>
  </div>
</template>

<script lang="ts" setup>
import { getEnemiesListByCoordinate } from '~/backendInfo/npc'
import { BASE_INFO, MODIFICATORS } from '~/constants/creaturesParams'
const router = useRouter();

const stateUserInfo = storeStateUserInfo().value.position

const enemiesListObj = computed(() => getEnemiesListByCoordinate(stateUserInfo))
const enemiesListArray = computed(() => {
  return Object.keys(enemiesListObj.value).map((id) => enemiesListObj.value[id])
})

const openItemInfo = (itemProto: number): void => {
  router.push(`/info/npc/${itemProto}`)
}
</script>

<style lang="scss" module>
.asterisk {
  font-size: 8px;
}
</style>
