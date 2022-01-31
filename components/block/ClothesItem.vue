<template>
  <div class="flex mb-5">
    <div class="w-24">
      <img
        :src="item.img"
        alt=""
      >
    </div>

    <div class="flex-grow">
      <div class="h5 font-bold">
        {{ item.info.title }}
      </div>

      <div class="h6">
        Прочность: {{ item[CLOTHES_STATS.DURABILITY] }} / {{ item.info[CLOTHES_STATS.MAX_DURABILITY] }}
      </div>

      <div class="h6 font-bold mt-2">Требования:</div>

      <div
        v-for="(reqProp, reqKey, reqIndex) in item.require"
        :key="`require ${reqIndex}`"
        class="h6"
      >
        {{ getNameByKey(reqKey) }} : {{ reqProp }}
      </div>

      <div class="h6 font-bold mt-2">Свойства:</div>

      <div
        v-for="(propProp, propKey, propIndex) in item.props"
        :key="`property ${propIndex}`"
        class="h6"
      >
        {{ getNameByKey(propKey) }} : +{{ propProp }}
      </div>

      <div
        v-if="item.action && item.action[CLOTHES_STATS.USE_CHANCE]"
        class="h6"
      >
        {{ getNameByKey([CLOTHES_STATS.USE_CHANCE]) }} : {{ item.action[CLOTHES_STATS.USE_CHANCE] }}%
      </div>

      <template v-if="item.action">
        <div class="h6 font-bold mt-2">Действие:</div>

        <div class="h6">
          {{ getActionDescription(item.action) }}
        </div>
      </template>

      <div class="mt-2" />

      <UIButton
        size="M"
        @click="buttonStrategy[buttonAction][!!item.equippedIn].handler"
      >
        {{ buttonStrategy[buttonAction][!!item.equippedIn].text }}
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getNameByKey, getActionDescription } from '~/helpers/paramsNames'
import { withDefaults, computed } from 'vue'
import { storeActionDressItem, storeActionUndressItem, storeActionThrowItemFromInventory } from '~/composables/store';
import { ClientEquipmentItem } from '~/typings/equipments-items'
import { EquipedTypes } from '~/typings/store'
import { CLOTHES_STATS } from '~/constants/clothesInfo'

type ButtonActions = 'default' | 'throwItem'

interface Props {
  /**
   * @value "default" - put on / take off item
   * @value "throwItem" - throw item from inventory
  */
  buttonAction?: ButtonActions
  item: ClientEquipmentItem & { equippedIn: EquipedTypes }
  currentActiveTitle?: EquipedTypes
}
const props = withDefaults(defineProps<Props>(), {
  buttonAction: 'default',
  currentActiveTitle: null
})
const { buttonAction, item, currentActiveTitle } = props

const userState = storeStateUserInfo()
const userEquip = computed(() => userState.value.equipped)

const emit = defineEmits(['close'])

const undressItem = (): void => {
  storeActionUndressItem(item.equippedIn)
  emit('close')
}

const dressItem = (): void => {
  storeActionDressItem({ type: currentActiveTitle, id: item.id })
  emit('close')
}

const throwItem = (): void => {
  storeActionThrowItemFromInventory(item.id)
}

const buttonStrategy: Record<ButtonActions,
  Record<'true' | 'false', {
    text: string
    handler: Function
  }>
> = {
  'throwItem': {
    'true': {
      text: 'Выбросить',
      handler: throwItem
    },
    'false': {
      text: 'Выбросить',
      handler: throwItem
    },
  },
  'default': {
    'true': {
      text: 'Снять',
      handler: undressItem
    },
    'false': {
      text: 'Надеть',
      handler: dressItem
    }
  }
}
</script>

<style lang="scss">
</style>