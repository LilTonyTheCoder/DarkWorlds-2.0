<template>
  <div>
    <div class="p-3 mb-2 bg-light text-dark relative">
      <PagesIndexMap :map-array="mapArray" />

      <PagesIndexMapControllers />
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapArray } from '~/backendInfo/map'

useMeta({
  title: 'DarkWorlds'
})
</script>
