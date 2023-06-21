<template>
  <PagesModulesIndex />
</template>

<script lang="ts">
import { mapActions } from 'pinia'
import PagesModulesIndex from '~/components/pages-modules/index/index'
import { GAME_NAME } from '~/stores/header/index.constants'
import { useMapStore } from '~/stores/map'

export default {
  name: 'PageIndex',

  components: {
    PagesModulesIndex
  },

  head () {
    return {
      title: GAME_NAME
    }
  },

  async mounted () {
    await this.fetchMyMap()
    await this.fetchMapMove()
  },

  methods: {
    ...mapActions(useMapStore, ['fetchMyMap', 'fetchMapMove'])
  }
}
</script>
