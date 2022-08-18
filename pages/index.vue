<template>
  <div>
    <div class="p-3 mb-2 bg-light text-dark relative">
      <PagesIndexMap :map-array="mapArray" />

      <PagesIndexMapControllers />

      <PagesIndexMapEnemies />

      <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
    </form>
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
