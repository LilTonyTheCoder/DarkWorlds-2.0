<template>
  <div :class="['absolute', $style.wrapper]">
    <div>
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
import { POSITIONS } from '~/constants/creaturesParams'

const userState = storeStateUserInfo();
const userPosition = computed(() => userState.value.position);
const possibleMoves = computed(() => {
  const currentAreaObj = mapArray[userPosition.value[POSITIONS.Y]][userPosition.value[POSITIONS.X]]
  return currentAreaObj.possibleMoves ? currentAreaObj.possibleMoves : ['t', 'l', 'r', 'b']
});

const routesArray = computed(() => {
  let outputArray = [
    { name: '↑', canMove: false, styleOrder: 4 },
    { name: '↓', canMove: false, styleOrder: 2 },
    { name: '←', canMove: false, styleOrder: 1 },
    { name: '→', canMove: false, styleOrder: 3},
  ]
  if (possibleMoves.value.includes('t')) outputArray[0].canMove = true
  if (possibleMoves.value.includes('b')) outputArray[1].canMove = true
  if (possibleMoves.value.includes('l')) outputArray[2].canMove = true
  if (possibleMoves.value.includes('r')) outputArray[3].canMove = true

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

  userMapMove(direction)
}

const setKeyPressToMove = (event) => {
  if (event.keyCode === 37 || event.keyCode === 65) handleMove('←')
  if (event.keyCode === 38 || event.keyCode === 87) handleMove('↑')
  if (event.keyCode === 39 || event.keyCode === 68) handleMove('→')
  if (event.keyCode === 40 || event.keyCode === 83) handleMove('↓')
}

onMounted(() => {
  document.addEventListener("keyup", setKeyPressToMove)
})

onBeforeUnmount(() => {
  document.removeEventListener("keyup", setKeyPressToMove)
})
</script>

<style lang="scss" module>
.wrapper {
  top: 180px;
  right: 30px;
  width: calc(70px + 24px);
}

.panel {
  background: rgba(255,255,255,.8);
  border-radius: 4px;
}
</style>