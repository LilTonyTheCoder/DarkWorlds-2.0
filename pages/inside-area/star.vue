<template>
  <div class="p-3 mb-2 bg-light text-dark relative">
    <div :class="$style.imgContainer">
      <img
        v-if="insideAreaStore.info.img"
        :src="`/images/areas/${insideAreaStore.info.img}`"
      >
    </div>

    <b>{{ insideAreaStore.info.name }}</b>
    <br>
    {{ insideAreaStore.info.description }}
    <br>
    <UIButton
      variant="secondary"
      full-width
      @click="handleRefill"
    >
      Refill myself
    </UIButton>
  </div>
</template>

<script lang="ts">
import { mapStores, mapActions } from 'pinia'
import { GAME_NAME } from '~/stores/header/index.constants'
import { useInsideArea } from '~/stores/inside-area'
import { useHeaderStore } from '~/stores/header'

export default {
  name: 'PageInsideAreaStar',

  head () {
    return {
      title: GAME_NAME
    }
  },

  computed: {
    ...mapStores(useInsideArea)
  },

  async mounted () {
    await this.insideAreaStore.fetchInsideArea()
    this.changeTitle(this.insideAreaStore.info.name)
  },

  methods: {
    ...mapActions(useHeaderStore, ['changeTitle']),
    handleRefill () {
      // TODO: add toaster
      // TODO: add BE api
      console.log('Refilling...')
    }
  }
}
</script>

<style lang="scss" module>
.imgContainer {
  height: 200px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
