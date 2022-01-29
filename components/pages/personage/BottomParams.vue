<template>
  <div>
    <div class="text-dark-grey font-bold flex align-center h-9">Параметры</div>

    <div
      v-for="(param, index) in paramsToShow"
      :key="index"
      :class="['flex align-center justify-between h-9', $style.paramRow, $style[`paramRow--${param}`]]"
    >
      <div> {{ getNameByKey(param) }} </div>

      <div>
        <b>
          + {{ allWearedModificators[param] }}
        </b>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserItemsMixin from '~/components/mixins/user-items'
import { getNameByKey } from '~/helpers/paramsNames'
import { KeyNameKeys } from '~/helpers/paramsNames'
import { ModificatorsType } from '~/typings/equipments-items'

const { allWearedModificators } = UserItemsMixin()

const paramsToShow: ModificatorsType[] = [
  'hp',
  'pw',
  'min_damage',
  'max_damage',
  'armor_head',
  'armor_body',
  'armor_waist',
  'armor_legs',
  'crit',
  'a_crit',
  'uvorot',
  'a_uvorot',
]

// const emit = defineEmits(['scrollToBottom'])

// const scrollToBottom = (): void => {
//   if (activeNames.value.length > 0) {
//     emit('scrollToBottom')
//   }
// }
</script>

<style lang="scss" module>
.paramRow {
  &--hp, &--crit, &--a_crit {
    color: #F56C6C;
  }
  &--pw, &--uvorot, &--a_uvorot {
    color: #409EFF;
  }
  &--max_damage, &--pw, &--armor_legs {
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
