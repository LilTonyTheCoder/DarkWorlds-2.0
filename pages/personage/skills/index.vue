<template>
  <div>
    PersonageSkillsPage: WIP
  </div>
</template>

<script lang="ts" setup>
import { useHeaderStore } from '~/stores/header'

/** STORE */
const headerStore = useHeaderStore()

/** HOOKS */
headerStore.resetTitle()

/** META */
useMeta({
  title: 'DW skills'
})

</script>

<style lang="scss">

</style>
