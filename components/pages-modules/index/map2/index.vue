<template>
  <div class="h-60 bg-zinc-300">
    <div
      v-for="(row, index) in mapArray"
      :key="index"
      class="flex"
    >
      <div
        v-for="(col, colIndex) in row"
        :key="colIndex"
      >
        <!-- Top -->
        <div class="flex">
          <div
            :style="`width:${lineSizeInPx}px;height:${lineSizeInPx}px`"
          />
          <div
            :class="` bg-orange-600 border border-sky-500`"
            :style="`width:${oneSquareSizeInPx-lineSizeInPx*2}px;height:${lineSizeInPx}px`"
          />
          <div
            :style="`width:${lineSizeInPx}px;height:${lineSizeInPx}px`"
          />
        </div>

        <!-- Middle -->
        <div class="flex">
          <div
            :style="`width:${lineSizeInPx}px;height:${oneSquareSizeInPx-lineSizeInPx*2}px`"
          />
          <div
            :class="` bg-orange-600 border border-sky-500`"
            :style="`width:${oneSquareSizeInPx-lineSizeInPx*2}px;height:${oneSquareSizeInPx-lineSizeInPx*2}px`"
          />
          <div
            :style="`width:${lineSizeInPx}px;height:${oneSquareSizeInPx-lineSizeInPx*2}px`"
          />
        </div>

        <!-- Bottom -->
        <div class="flex">
          <div
            :style="`width:${lineSizeInPx}px;height:${lineSizeInPx}px`"
          />
          <div
            :class="` bg-orange-600 border border-sky-500`"
            :style="`width:${oneSquareSizeInPx-lineSizeInPx*2}px;height:${lineSizeInPx}px`"
          />
          <div
            :style="`width:${lineSizeInPx}px;height:${lineSizeInPx}px`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { useMapStore } from '~/stores/map'

export default {
  name: 'PagesModulesIndexMapV2',

  data () {
    return {
      oneSquareSizeInPx: 24,
      lineSizeInPx: 2
    }
  },

  computed: {
    ...mapStores(useMapStore),

    mapArray () {
      return this.mapStore.mapArray
    }
  }
}
</script>
