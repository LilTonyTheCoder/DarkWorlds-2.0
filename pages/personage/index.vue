<template>
  <div class="personage-page">
    <div class="flex flex-wrap justify-center">
      <PagesPersonageUserClothesSection
        class="inventory inventory--left"
        :clothes="leftSideItems"
      />

      <div class="inventory inventory--avatar">
        <PagesPersonageUserClothesSection
          class="inventory__runes flex"
          :clothes="runesTop"
        />

        <PagesPersonageUserAvatarSection />

        <PagesPersonageUserClothesSection
          class="inventory__runes flex"
          :clothes="runesBottom"
        />
      </div>

      <PagesPersonageUserClothesSection
        class="inventory inventory--right"
        :clothes="rightSideItems"
      />

      <PagesPersonageUserClothesSection
        class="inventory inventory--w100"
        :clothes="stones"
      />
    </div>

    <div class="h5 pt-3 px-5">
      <PagesPersonageStats />

      <PagesPersonageBottomParams />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { resetHeaderTitle } from '~/composables/headerCompo'
import { computed } from 'vue'
import { leftSideItems, rightSideItems, stones, runesTop, runesBottom } from '~/helpers/personageWearingInfo'

useMeta({
  title: 'DW personage'
})
resetHeaderTitle()

const userState = storeStateUserInfo();
const userCommon = computed(() => userState.value.common)
const userSettings = computed(() => userState.value.settings)
</script>

<style lang="scss">
.personage-page {
  &__dialog {
    position: fixed;
    width: 80%;
    min-height: 50vh;
    background: #fff;
    border: 1px solid #000;
    top: 10%;
    left: 10%;
  }
}
</style>
