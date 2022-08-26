<template>
  <div class="px-5">
    <div class="h5 font-bold">
      Финансы:
    </div>
    <!-- <div class="h5">Загрузка: 37/107</div> -->

    <div
      v-for="item in currensiesMap"
      :key="item.title"
      class="h6"
    >
      {{ item.title }}: {{ item.val }}
    </div>

    <br>

    <div class="h5 font-bold">
      Общее:
    </div>

    <div class="h6">Вещей всего: {{ allItemsArray.length }}</div>

    <br>

    <BlockClothesItem
      v-for="item in allItemsArray"
      :key="item.id"
      :item="item"
      button-action="throwItem"
    />
  </div>
</template>

<script lang="ts" setup>
import { getItemById, prototypes } from '~/backendInfo/items'
import { ref, computed } from 'vue'
import { ClientEquipmentItem } from '~/typings/equipments-items'
import { FINANCE_CURRENSIES, FINANCE_NAMES } from '~/constants/userStore'
import { useHeaderStore } from '~/stores/header'
import { useUserInfoStore } from '~/stores/user';

/** STORE */
const headerStore = useHeaderStore()
const userInfoStore = useUserInfoStore()

/** COMPUTED */
const allItemsArray = computed(() => {
  const arr: ClientEquipmentItem[] = []

  userInfoStore.inventory.forEach(id => {
    // sort only non-equipped items
    let isEquippedCurrentItem = false
    Object.keys(userInfoStore.equipped).forEach((key) => {
      if (userInfoStore.equipped[key] === id) isEquippedCurrentItem = true
    })
    if (isEquippedCurrentItem) return
    // add item info from back
    arr.push(getItemById(id))
  })
  return arr
})

const currensiesMap = computed<{
  val: number
  title: string
}[]>(() => {
  return Object.keys(FINANCE_CURRENSIES).map(key => {
    return {
      val: userInfoStore.finance[key],
      title: FINANCE_NAMES[key]
    }
  })
})

/** HOOKS */
headerStore.resetTitle()

/** META */
useMeta({
  title: 'DW bag'
})

</script>

<style lang="scss">
</style>
