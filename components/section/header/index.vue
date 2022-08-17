<template>
  <div class="bg-white">
    <div class="flex items-center">
      <UIButton
        icon-only
        variant="text"
        @click="menuButtonHandler"
      >
        <i v-if="isMainPageRoute" class="bi bi-list"></i>
        <i v-else class="bi bi-arrow-left"></i>
      </UIButton>

      <span>
        {{ headerState.title }}
      </span>

      <div class="flex flex-col flex-grow items-end mr-2">
        <span class="h6">
          HP: {{ storeGetterUserCurrentHP }} / {{ storeGetterUserMaxHP }}
        </span>

        <span class="h6">
          PW: {{ storeGetterUserCurrentPW }} / {{ storeGetterUserMaxPW }}
        </span>
      </div>
    </div>

    <div class="flex justify-around">
      <UIButton
        v-for="(item) in bottomLinksArray"
        :key="item.link"
        :to="item.link"
        full-width
        variant="text"
      >
        {{ item.title }}
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  storeGetterUserMaxHP,
  storeGetterUserCurrentHP,
  storeGetterUserMaxPW,
  storeGetterUserCurrentPW
} from '~/composables/store'

import { useLeftMenuStore } from '~/stores/leftMenu';

const leftMenuStore = useLeftMenuStore()

const bottomLinksArray: {
  title: string
  link: string
}[] = [
  {
    title: 'Персонаж',
    link: '/personage'
  },
  {
    title: 'Умения',
    link: '/personage/skills'
  },
  {
    title: 'Сумка',
    link: '/personage/bag'
  }
]
const route = useRoute()
const router = useRouter()
const headerState = storeStateHeader()
const isMainPageRoute = computed(() => route.fullPath === '/')

const menuButtonHandler = (): void => {
  if (isMainPageRoute.value) {
    leftMenuStore.toggle()
  } else {
    router.push('/')
  }
}
</script>