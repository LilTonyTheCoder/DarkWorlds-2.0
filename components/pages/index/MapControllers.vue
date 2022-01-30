<template>
  <div :class="['absolute', $style.wrapper]">
    <div>
      <div class="ml-auto mb-1 flex flex-column align-end">
        <UIButton
          class="routes__line line"
          icon-only
          size="S"
          @click="resizeMap(15)"
        >
          +
        </UIButton>
        <UIButton
          class="routes__line line"
          icon-only
          size="S"
          @click="resizeMap(-15)"
        >
          -
        </UIButton>
      </div>
      <div :class="['flex flex-wrap-reverse align-center justify-center p-3', $style.panel]">
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
import { storeActionMapMove } from '~/composables/store';

const userState = storeStateUserInfo();
const userPosition = computed(() => userState.value.position);
const possibleMoves = computed(() => {
  const currentAreaObj = mapArray[userPosition.value.y][userPosition.value.x]
  return currentAreaObj.possibleMoves ? currentAreaObj.possibleMoves : ['t', 'l', 'r', 'b']
});

const routesArray = computed(() => {
  let outputArray = [
    { name: '↑', canMove: possibleMoves.value.includes('t') ? true: false, styleOrder: 4 },
    { name: '↓', canMove: possibleMoves.value.includes('b') ? true: false, styleOrder: 2 },
    { name: '←', canMove: possibleMoves.value.includes('l') ? true: false, styleOrder: 1 },
    { name: '→', canMove: possibleMoves.value.includes('r') ? true: false, styleOrder: 3},
  ]

  return outputArray
});

const userMapMove = (direction) => { // userMapMove: 'user/storeActionMapMove',
  storeActionMapMove(direction)
}

const handleMove = (direction) => {
  const canMove = routesArray.value.find(el => el.name === direction).canMove

  if (!canMove) {
    console.warn('Нельзя идти в этом направлении.')
    return
  }

  // simply call storeActionMapMove(direction) ?
  userMapMove(direction)
}

const resizeMap = (sizeDifference: number) => {
  // @@TODO emmit event
  // $emit('changeIndexMapSize', sizeDifference)
  console.log('resize', sizeDifference)
}

const listenKeyPress = (event) => {
  if (event.keyCode === 37 || event.keyCode === 65) handleMove('←')
  if (event.keyCode === 38 || event.keyCode === 87) handleMove('↑')
  if (event.keyCode === 39 || event.keyCode === 68) handleMove('→')
  if (event.keyCode === 40 || event.keyCode === 83) handleMove('↓')

  if (event.keyCode === 187) resizeMap(15)
  if (event.keyCode === 189) resizeMap(-15)
}

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