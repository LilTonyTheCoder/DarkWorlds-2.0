<template>
  <div>
    <div class="p-3 mb-2 bg-light text-dark relative">
      <PagesIndexMap :map-array="mapArray" />

      <PagesIndexMapControllers />

      <PagesIndexMapEnemies />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mapArray } from '~/backendInfo/map'
import { changeHeaderTitle } from '~/composables/headerCompo'

const storeStateHeaderLocal = storeStateHeader()

useMeta({
  title: storeStateHeaderLocal.value.gameName
})
changeHeaderTitle(storeStateHeaderLocal.value.gameName)
</script>
