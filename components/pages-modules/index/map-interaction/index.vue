<template>
  <div
    v-if="!AREAS_WITH_NO_INTERACTION[areaName]"
    :class="['absolute cursor-pointer', $style.wrapper]"
  >
    <div>
      <div :class="['flex flex-wrap-reverse items-center justify-center p-3', $style.panel]">
        {{ areaName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { AREAS_WITH_NO_INTERACTION } from './index.constants'
import { useMapStore } from '~/stores/map'
import { POSITIONS } from '~/stores/map/index.constants'

export default {
  name: 'PagesModulesIndexMapAreaInteraction',

  data () {
    return {
      AREAS_WITH_NO_INTERACTION,
      POSITIONS
    }
  },

  computed: {
    ...mapStores(useMapStore),

    areaName () {
      const x = this.mapStore.position[POSITIONS.X]
      const y = this.mapStore.position[POSITIONS.Y]

      return this.mapStore.mapArray[y][x]?.area
    }
  }
}
</script>

  <style lang="scss" module>
  .wrapper {
    top: 20px;
    right: 50%;
    transform: translateX(50%);
    width: 150px;
  }

  .panel {
    background: rgba(255,255,255,.8);
    border-radius: 4px;
  }
  </style>
