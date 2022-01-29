<template>
  <div class="bg-white">
    <div class="flex align-center">
      <UIButton
        icon-only
        variant="text"
        @click="menuButtonHandler"
      >
        <i v-if="isMainPageRoute" class="bi bi-list"></i>
        <i v-else class="bi bi-arrow-left"></i>
      </UIButton>

      <span v-if="isMainPageRoute">
        {{ headerState.title }}
      </span>

      <span v-else>
        {{ userState.common.name }} [ {{ userState.common.lvl }} ]
      </span>
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
import { useRouter, useRoute } from 'vue-router'
import { storeActionToggleLeftMenu } from '~/composables/store'

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
const userState = storeStateUserInfo()
const headerState = storeStateHeader()
const isMainPageRoute = computed(() => route.fullPath === '/')

const menuButtonHandler = (): void => {
  if (isMainPageRoute.value) {
    storeActionToggleLeftMenu()
  } else {
    router.push('/')
  }
}
</script>