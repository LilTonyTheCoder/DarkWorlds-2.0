<template>
  <div class="p-3 mb-2 bg-light text-dark relative">
    <div :class="$style.imgContainer">
      <img
        src="/images/areas/under-reconstruction.png"
      >
    </div>

    <b>This area is under recunstruction</b>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'pinia'
import { GAME_NAME } from '~/stores/header/index.constants'
import { useHeaderStore } from '~/stores/header'

export default {
  name: 'PageInsideAreaDefault',

  head () {
    return {
      title: GAME_NAME
    }
  },

  mounted () {
    this.changeTitle('Under recunstruction')
  },

  methods: {
    ...mapActions(useHeaderStore, ['changeTitle'])
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
