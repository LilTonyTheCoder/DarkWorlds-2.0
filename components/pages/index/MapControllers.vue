<template>
  <div :class="['absolute', $style.wrapper]">
    <div>
      <div class="mb-1 flex justify-center">
        <UIButton
          v-for="item in sizesButtons"
          :key="item.title"
          class="routes__line line mr-1"
          icon-only
          size="S"
          :disabled="item.disabled"
          @click="mapStore.setOneBlockSize(item.val)"
        >
          {{ item.title }}
        </UIButton>
      </div>
      <div :class="['flex flex-wrap-reverse items-center justify-center p-3', $style.panel]">
        <UIButton
          v-for="(route, index) in routesArray"
          :key="index"
          class="routes__line line"
          icon-only
          size="S"
          :disabled="!route.canMove"
          :style="`order: ${route.styleOrder}`"
          @click="handleMove(route.name)"
        >
          {{ route.name }}
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapArray } from '~/backendInfo/map'
import { computed } from 'vue'
import { POSITIONS } from '~/constants/creaturesParams'
import { MapSizes, MapSizesTitles } from '~/constants/mapInfo'
import { useMapStore } from '~/stores/map'
import { useUserInfoStore } from '~/stores/user';

/** STORE */
const mapStore = useMapStore()
const userInfoStore = useUserInfoStore()

/** COMPUTED */
const possibleMoves = computed(() => {
  const currentAreaObj = mapArray[userInfoStore.position[POSITIONS.Y]][userInfoStore.position[POSITIONS.X]]
  return currentAreaObj.possibleMoves ? currentAreaObj.possibleMoves : ['t', 'l', 'r', 'b']
})

const sizesButtons = computed<{
  title: string
  val: string
  disabled: boolean
}[]>(() => {
  return Object.keys(MapSizes).map(key => {
    return {
      title: MapSizesTitles[key],
      val: MapSizes[key],
      disabled: mapStore.oneBlockSize === MapSizes[key]
    }
  })
})

const routesArray = computed(() => {
  let outputArray = [
    { name: '↑', canMove: possibleMoves.value.includes('t') ? true: false, styleOrder: 4 },
    { name: '↓', canMove: possibleMoves.value.includes('b') ? true: false, styleOrder: 2 },
    { name: '←', canMove: possibleMoves.value.includes('l') ? true: false, styleOrder: 1 },
    { name: '→', canMove: possibleMoves.value.includes('r') ? true: false, styleOrder: 3},
  ]

  return outputArray
});

/** METHODS */
const handleMove = (direction) => {
  const canMove = routesArray.value.find(el => el.name === direction).canMove

  if (!canMove) {
    console.warn('Нельзя идти в этом направлении.')
    return
  }

  userInfoStore.storeActionMapMove(direction)
}

const listenKeyPress = (event: KeyboardEvent) => {
  if (event.keyCode === 37 || event.keyCode === 65) handleMove('←')
  if (event.keyCode === 38 || event.keyCode === 87) handleMove('↑')
  if (event.keyCode === 39 || event.keyCode === 68) handleMove('→')
  if (event.keyCode === 40 || event.keyCode === 83) handleMove('↓')
}

/** HOOKS */
onMounted(() => {
  document.addEventListener("keyup", listenKeyPress)
})

onBeforeUnmount(() => {
  document.removeEventListener("keyup", listenKeyPress)
})
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