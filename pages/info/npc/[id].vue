<template>
  <div>
    Info page: WIP
    {{ $route.params.id }}
  </div>
</template>

<script type="ts" setup>
const route = useRoute()

useMeta({
  title: `${route.params.id} | Информация`
})
</script>

<style lang="scss">
</style>
