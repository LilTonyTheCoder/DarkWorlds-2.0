<template>
  <div>
    <div class="p-3 mb-2 bg-light text-dark relative">
      <PagesIndexMap :map-array="mapArray" />

      <PagesIndexMapControllers />

      <PagesIndexMapEnemies />

      <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">
            en
          </option>

          <option value="ru">
            ru
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { mapArray } from '~/backendInfo/map'
import { useHeaderStore } from '~/stores/header'

export default {
  name: 'PagesModulesIndex',

  data () {
    return {
      mapArray
    }
  },

  computed: {
    ...mapStores(useHeaderStore)
  },

  mounted () {
    this.headerStore.changeTitle(this.headerStore.gameName)
  }
}
</script>
