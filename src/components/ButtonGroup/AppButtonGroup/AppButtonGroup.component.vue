<template lang="pug">
.app-button-group
  span.app-button-group__title(v-if="title") {{ title }}

  .app-button-group__buttons
    template(v-for="(item, index) in items" :key="index")
      VsButton.app-button-group-button(
        color="dark"
        :size="options.button.size"
        active
        :class="[getButtonActiveClass(index)]"
        @click="handleClickButton(item)"
      ) {{ item.title }}
</template>

<script lang="ts" setup>
import type { ButtonType } from './AppButtonGroup.component.types'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: null
  },
  items: {
    type: Array,
    required: true
  },
  activeIndex: {
    type: Number,
    required: false,
    default: null
  },
  options: {
    type: Object,
    required: false,
    default: () => ({
      button: {
        size: 'small'
      }
    })
  }
})

const emit = defineEmits(['on-click-button'])

const handleClickButton = (item: ButtonType) => {
  emit('on-click-button', item)
}

const getButtonActiveClass = (index: number) => {
  if (index !== null && index >= 0 && index === props.activeIndex) {
    return `active`
  }
}
</script>

<style lang="scss" src="./AppButtonGroup.component.scss"></style>
