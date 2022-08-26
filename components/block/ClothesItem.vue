<template>
  <div class="flex mb-5">
    <div class="w-24">
      <img
        :src="props.item.img"
        alt=""
      >
    </div>

    <div class="flex-grow">
      <!-- Title info -->
      <div class="h5 font-bold">
        {{ props.item.info.title }}
      </div>
      <div class="h6">
        {{ t('Durability') }}: {{ props.item[CLOTHES_STATS.DURABILITY] }} / {{ props.item.info[CLOTHES_STATS.MAX_DURABILITY] }}
      </div>

      <!-- Requirements -->
      <div class="h6 font-bold mt-2">{{ t('Requirement') }}:</div>
      <div
        v-for="(reqProp, reqKey, reqIndex) in props.item.require"
        :key="`require ${reqIndex}`"
        class="h6"
      >
        {{ getNameByKey(reqKey) }} : {{ reqProp }}
      </div>

      <!-- Properties -->
      <div class="h6 font-bold mt-2">{{ t('Properties') }}:</div>
      <div
        v-for="(propProp, propKey, propIndex) in props.item.props"
        :key="`property ${propIndex}`"
        class="h6"
      >
        {{ getNameByKey(propKey) }} : +{{ propProp }}
      </div>

      <!-- Action chances -->
      <div
        v-if="props.item.action && props.item.action[CLOTHES_STATS.USE_CHANCE]"
        class="h6"
      >
        {{ getNameByKey([CLOTHES_STATS.USE_CHANCE]) }} : {{ props.item.action[CLOTHES_STATS.USE_CHANCE] }}%
      </div>

      <!-- Action description -->
      <template v-if="props.item.action">
        <div class="h6 font-bold mt-2">{{ t('Actions') }}:</div>

        <div class="h6">
          {{ getActionDescription(props.item.action) }}
        </div>
      </template>

      <div class="mt-2" />

      <!-- button -->
      <UIButton
        size="M"
        @click="buttonStrategy[props.buttonAction][!!props.item.equippedIn].handler"
      >
        {{ buttonStrategy[buttonAction][!!props.item.equippedIn].text }}
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getNameByKey, getActionDescription } from '~/helpers/paramsNames'
import { withDefaults, computed } from 'vue'
import { CLOTHES_STATS } from '~/constants/clothesInfo'
import { useI18n } from 'vue-i18n';
import ru from './ClothesItem.ru.json';
import en from './ClothesItem.en.json';
import { PropsInterface, ButtonStrategy } from './ClothesItem.types';
import { useUserInfoStore } from '~/stores/user';

/** PROPS */
const props = withDefaults(defineProps<PropsInterface>(), {
  buttonAction: 'default',
  currentActiveTitle: null,
})

const emit = defineEmits(['close'])

/** STORE */
const userInfoStore = useUserInfoStore()

/** DATA */
const { t } = useI18n({ messages: { en, ru }});

/** COMPUTED */
const buttonStrategy = computed<ButtonStrategy>(() => ({
  'throwItem': {
    'true': {
      text: t('Throw'),
      handler: throwItem
    },
    'false': {
      text: t('Throw'),
      handler: throwItem
    },
  },
  'default': {
    'true': {
      text: t('Unequip'),
      handler: undressItem
    },
    'false': {
      text: t('Equip'),
      handler: dressItem
    }
  }
}));

/** ACTIONS */
const undressItem = (): void => {
  userInfoStore.storeActionUndressItem(props.item.equippedIn)
  emit('close')
}

const dressItem = (): void => {
  userInfoStore.storeActionDressItem({ type: props.currentActiveTitle, id: props.item.id })
  emit('close')
}

const throwItem = (): void => {
  userInfoStore.storeActionThrowItemFromInventory(props.item.id)
}
</script>

<style lang="scss">
</style>
