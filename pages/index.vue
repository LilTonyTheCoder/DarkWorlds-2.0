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
import { useHeaderStore } from '~/stores/header'

const headerStore = useHeaderStore()

useMeta({
  title: headerStore.gameName
})

headerStore.changeTitle(headerStore.gameName)
</script>
