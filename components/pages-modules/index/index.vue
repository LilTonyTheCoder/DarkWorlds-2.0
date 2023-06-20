<template>
  <div>
    <div class="p-3 mb-2 bg-light text-dark relative">
      <PagesIndexMap />

      <PagesModulesIndexMapControllers />

      <PagesIndexMapEnemies />

      <form>
        <label for="locale-select">{{ $t('language') }}:</label>

        <select id="locale-select" v-model="$i18n.locale">
          <option
            v-for="locale in locales"
            :key="locale"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'pinia'
import PagesModulesIndexMapControllers from './map-controllers/index.vue'
import { GAME_NAME } from '~/stores/header/index.constants'
import { useHeaderStore } from '~/stores/header'

export default {
  name: 'PagesModulesIndex',

  components: {
    PagesModulesIndexMapControllers
  },

  data () {
    return {
      locales: ['en', 'ru']
    }
  },

  mounted () {
    this.changeTitle(GAME_NAME)
  },

  methods: {
    ...mapActions(useHeaderStore, ['changeTitle'])
  }

}
</script>
