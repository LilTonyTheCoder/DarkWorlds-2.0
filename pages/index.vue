<template>
  <PagesModulesIndex />
</template>

<script lang="ts">
import PagesModulesIndex from '~/components/pages-modules/index/index'
import { useHeaderStore } from '~/stores/header'

export default {
  name: 'PageIndex',

  components: {
    PagesModulesIndex
  },

  setup () {
    const headerStore = useHeaderStore()

    useHead({
      title: headerStore.gameName
    })
  }
}
</script>
