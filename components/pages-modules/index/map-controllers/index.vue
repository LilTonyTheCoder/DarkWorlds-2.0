<template>
  <div :class="['absolute', $style.wrapper]">
    <div>
      <!-- Sizes buttons -->
      <div class="mb-1 flex justify-center">
        <UIButton
          v-for="item in MAP_SIZES_NEW"
          :key="item.title"
          class="routes__line line mr-1"
          icon-only
          size="S"
          :disabled="mapStore.oneBlockSize === item.val"
          @click="mapStore.setOneBlockSize(item.val)"
        >
          {{ item.title }}
        </UIButton>
      </div>

      <!-- Directions buttons -->
      <div :class="['flex flex-wrap-reverse items-center justify-center p-3', $style.panel]">
        <UIButton
          v-for="direction in directionsButtons"
          :key="direction.name"
          class="routes__line line"
          icon-only
          size="S"
          :disabled="!movesAvailability[direction.name]"
          :style="`order: ${direction.styleOrder}`"
          @click="handleMove(direction.name)"
        >
          {{ MOVE_DIRECTIONS_SYMBOLS[direction.name] }}
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import ru from './index.i18n.ru.json'
import en from './index.i18n.en.json'
import { MOVE_DIRECTIONS_SYMBOLS, ALL_POSSIBLE_DIRECTIONS } from './index.constants'
import { POSITIONS } from '~/constants/creaturesParams'
import { useMapStore } from '~/stores/map'
import { useUserInfoStore } from '~/stores/user'
import { i18nTranslator } from '~/plugins/i18n'
import { MOVE_DIRECTIONS } from '~/stores/user/index.constants'
import { MAP_SIZES_NEW } from '~/stores/map/index.constants'

i18nTranslator({ en, ru })

export default {
  name: 'PagesModulesIndexMapControllers',

  data () {
    return {
      MOVE_DIRECTIONS_SYMBOLS,
      MAP_SIZES_NEW
    }
  },

  computed: {
    ...mapStores(useMapStore, useUserInfoStore),

    movesAvailability () {
      const Y = this.userInfoStore.position[POSITIONS.Y]
      const X = this.userInfoStore.position[POSITIONS.X]

      const currentAreaObj = (this.mapStore.mapArray[Y] && this.mapStore.mapArray[Y][X])
        ? this.mapStore.mapArray[Y][X].possibleMoves || ALL_POSSIBLE_DIRECTIONS // TODO: should be fixed. I think on the BE side
        : []

      return {
        [MOVE_DIRECTIONS.TOP]: currentAreaObj.includes(MOVE_DIRECTIONS.TOP),
        [MOVE_DIRECTIONS.LEFT]: currentAreaObj.includes(MOVE_DIRECTIONS.LEFT),
        [MOVE_DIRECTIONS.BOTTOM]: currentAreaObj.includes(MOVE_DIRECTIONS.BOTTOM),
        [MOVE_DIRECTIONS.RIGHT]: currentAreaObj.includes(MOVE_DIRECTIONS.RIGHT)
      }
    },

    directionsButtons () {
      return [
        { name: MOVE_DIRECTIONS.TOP, styleOrder: 4 },
        { name: MOVE_DIRECTIONS.BOTTOM, styleOrder: 2 },
        { name: MOVE_DIRECTIONS.LEFT, styleOrder: 1 },
        { name: MOVE_DIRECTIONS.RIGHT, styleOrder: 3 }
      ]
    }
  },

  mounted () {
    document.addEventListener('keyup', this.listenKeyPress)
  },

  unmounted () {
    document.removeEventListener('keyup', this.listenKeyPress)
  },

  methods: {
    handleMove (direction) {
      /** If the move is unavailable */
      if (!this.movesAvailability[direction]) {
        console.warn(this.$t('You cannot go this way.')) // TODO: message to chat
        return
      }

      /** Otherwise move */
      this.userInfoStore.storeActionMapMove(direction)
    },

    listenKeyPress (event: KeyboardEvent) {
      if (event.keyCode === 37 || event.keyCode === 65) { this.handleMove(MOVE_DIRECTIONS.LEFT) }
      if (event.keyCode === 38 || event.keyCode === 87) { this.handleMove(MOVE_DIRECTIONS.TOP) }
      if (event.keyCode === 39 || event.keyCode === 68) { this.handleMove(MOVE_DIRECTIONS.RIGHT) }
      if (event.keyCode === 40 || event.keyCode === 83) { this.handleMove(MOVE_DIRECTIONS.BOTTOM) }
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  top: 140px;
  right: 30px;
  width: calc(70px + 24px);
}

.panel {
  background: rgba(255,255,255,.8);
  border-radius: 4px;
}
</style>
