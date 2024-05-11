<template lang="pug">
ClientOnly
  span.app-icon
    Icon.app-icon__icon(
      :name="name"
      :style="{ fill: color, color: color, width: `${width}px`, height: `${height}px`, fontSize: `${fontSize}px` }"
      :width="width"
      :height="height"
    )
    label.app-icon__label(v-if="label" :class="[labelDigitControlClass, labelHideZeroClass]") {{ controlledLabel }}
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: false,
    default: 16
  },
  height: {
    type: Number,
    required: false,
    default: 16
  },
  fontSize: {
    type: Number,
    required: false,
    default: 16
  },
  color: {
    type: String,
    required: false,
    default: 'unset'
  },
  label: {
    type: [String, Number],
    required: false,
    default: null
  },
  show0Number: {
    type: Boolean,
    required: false,
    default: false
  },
  max99Number: {
    type: Boolean,
    required: false,
    default: true
  }
})

const max99Text = ref('99+')

const labelDigitControlClass = computed(() => {
  return `app-icon__label--digit${String(props.label).length}`
})

const labelHideZeroClass = computed(() => {
  let hideZeroClass

  if (!props.show0Number) {
    if (props.label == 0) {
      hideZeroClass = 'app-icon__label--hidden-zero'
    }
  }

  return hideZeroClass
})

const controlledLabel = computed(() => {
  let label

  if (props.max99Number && typeof props.label === 'number') {
    if (props.label > 99) {
      label = max99Text.value
    } else {
      label = props.label
    }
  } else {
    label = props.label
  }

  return label
})
</script>

<style lang="scss" src="./AppIcon.component.scss" />
