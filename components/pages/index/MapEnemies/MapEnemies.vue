<template>
  <div>
    <UICollapse
      :title="`${$t('Monsters')} (${enemiesListArray.length}):`"
    >
      <div
        v-for="item in enemiesListArray"
        :key="item.id"
        class="flex w-full h-16 mb-4 "
      >
        <img
          :src="item.info.img"
          class="cursor-pointer mr-4 w-12"
          :alt="item.info.name"
          @click="openItemInfo(item.prototype)"
        >

        <div class="flex flex-grow flex-col">
          <div class="h5 font-bold">
            {{ item.info[BASE_INFO.NAME] }} [{{ item.info[BASE_INFO.LVL] }}]

            <i
              v-if="item.isAgressive"
              :class="['bi bi-asterisk text-red', $style.asterisk]"
            />
          </div>

          <div class="h6">
            {{ $t('HP') }}: {{ item.info[MODIFICATORS.HP] }}
          </div>

          <div class="h6">
            {{ $t('Damage') }}: {{ item.modificators[MODIFICATORS.MIN_DAMAGE] }} - {{ item.modificators[MODIFICATORS.MAX_DAMAGE] }}
          </div>
        </div>

        <div class="flex items-center justify-center mr-1">
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
import { useI18n } from 'vue-i18n'
import ru from './index.i18n.ru.json'
import en from './index.i18n.en.json'
import { getEnemiesListByCoordinate } from '~/backendInfo/npc'
import { BASE_INFO, MODIFICATORS } from '~/constants/creaturesParams'
import { useMapStore } from '~/stores/map/index'

/** STORE */
const router = useRouter()
const { t: $t } = useI18n({ messages: { en, ru } })

/** COMPUTED */
const userPosition = computed(() => {
  return useMapStore().position
})
const enemiesListObj = computed(() => getEnemiesListByCoordinate(userPosition.value))
const enemiesListArray = computed(() => {
  return Object.keys(enemiesListObj.value).map(id => enemiesListObj.value[id])
})

/** METHODS */
const openItemInfo = (itemProto: number): void => {
  router.push(`/info/npc/${itemProto}`)
}
</script>

<style lang="scss" module>
.asterisk {
  font-size: 8px;
}
</style>
