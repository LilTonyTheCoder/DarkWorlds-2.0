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
import { resetHeaderTitle } from '~/composables/headerCompo'

useMeta({
  title: 'DW bag'
})
resetHeaderTitle()

const itemProt = ref(prototypes);

const userState = storeStateUserInfo()
const userInventory = computed(() => userState.value.inventory)
const userCommon = computed(() => userState.value.common)
const userEquipped = computed(() => userState.value.equipped)

const allItemsArray = computed(() => {
  const arr: ClientEquipmentItem[] = []

  userInventory.value.forEach(id => {
    // sort only non-equipped items
    let isEquippedCurrentItem = false
    Object.keys(userEquipped.value).forEach((key) => {
      if (userEquipped.value[key] === id) isEquippedCurrentItem = true
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
      val: userState.value.finance[key],
      title: FINANCE_NAMES[key]
    }
  })
})
</script>

<style lang="scss">
</style>
