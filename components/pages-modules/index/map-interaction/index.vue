<template>
  <div
    :class="['absolute cursor-pointer', $style.wrapper]"
  >
    <div
      v-if="mapStore.interactiveArea"
      @click="goInsideArea"
    >
      <div :class="['flex flex-wrap-reverse items-center justify-center p-3', $style.panel]">
        {{ mapStore.interactiveArea }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { useMapStore } from '~/stores/map'
import { POSITIONS } from '~/stores/map/index.constants'
import { INSIDE_AREA_ROUTE } from '~/helpers/routes'

export default {
  name: 'PagesModulesIndexMapAreaInteraction',

  data () {
    return {
      POSITIONS
    }
  },

  computed: {
    ...mapStores(useMapStore),

    currentArea () { // TODO: get from BE
      const x = this.mapStore.position[POSITIONS.X]
      const y = this.mapStore.position[POSITIONS.Y]

      return this.mapStore.mapArray[y][x]
    }
  },

  methods: {
    goInsideArea () {
      this.$router.push(`${INSIDE_AREA_ROUTE}/${this.currentArea.area}`)
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
