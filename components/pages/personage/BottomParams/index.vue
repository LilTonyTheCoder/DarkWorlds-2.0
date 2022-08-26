<template>
  <div>
    <UICollapse :title="$t('Parameters')">
      <div
        v-for="(param, index) in paramsToShow"
        :key="index"
        :class="['flex items-center justify-between h-9', $style.paramRow, $style[`paramRow--${param}`]]"
      >
        <div> {{ getNameByKey(param) }} </div>

        <div>
          <b>
            + {{ allWearedModificators[param] }}
          </b>
        </div>
      </div>
    </UICollapse>
  </div>
</template>

<script setup lang="ts">
import UserItemsMixin from '~/components/mixins/user-items'
import { getNameByKey } from '~/helpers/paramsNames'
import { KeyNameKeys } from '~/helpers/paramsNames'
import { MODIFICATORS } from '~/constants/creaturesParams'
import { useI18n } from 'vue-i18n';
import ru from './index.i18n.ru.json';
import en from './index.i18n.en.json';

/** MIXINS */
const { allWearedModificators } = UserItemsMixin()

/** STORE */
const { t: $t } = useI18n({ messages: { en, ru }});

/** DATA */
const paramsToShow: MODIFICATORS[] = [
  MODIFICATORS.HP,
  MODIFICATORS.PW,
  MODIFICATORS.MIN_DAMAGE,
  MODIFICATORS.MAX_DAMAGE,
  MODIFICATORS.ARMOR_HEAD,
  MODIFICATORS.ARMOR_BODY,
  MODIFICATORS.ARMOR_WAIST,
  MODIFICATORS.ARMOR_LEGS,
  MODIFICATORS.CRIT,
  MODIFICATORS.A_CRIT,
  MODIFICATORS.UVOROT,
  MODIFICATORS.A_UVOROT,
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
