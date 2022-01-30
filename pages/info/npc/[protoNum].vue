<template>
  <div class="px-5 flex flex-column">
    <div>
      <img :src="enemy.info.img" alt="">
    </div>

    <div class="flex w-44 justify-between h6">
      <div>Уровень: </div>
      <div>10</div>
    </div>

    <div class="flex w-44 justify-between h6">
      <div>HP: </div>
      <div>10</div>
    </div>

    <div class="flex w-44 justify-between h6">
      <div>Урон: </div>
      <div>10</div>
    </div>

    <div class="flex w-44 justify-between h6">
      <div>Опыт: </div>
      <div>10</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getEnemyByPrototype } from '~/backendInfo/npc'
import { changeHeaderTitle } from '~/composables/headerCompo'

const route = useRoute()

const enemy = getEnemyByPrototype(route.params.protoNum)
const enemyName = enemy.info.name

useMeta({
  title: `${enemyName} | Информация`
})
changeHeaderTitle(enemyName)
</script>

<style lang="scss">
</style>
