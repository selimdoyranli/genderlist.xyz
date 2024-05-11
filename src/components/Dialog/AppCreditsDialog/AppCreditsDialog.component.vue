<template lang="pug">
ClientOnly
  VsDialog(v-model="dialog.isOpen" @close="handleClose")
    template(#header)
      .app-credits-dialog__header
        AppLogo.mt-4

    .app-credits-dialog__content
      p(v-html="$t('credits.description')")

    template(#footer)
      .app-credits-dialog__footer
        a(href="https://github.com/selimdoyranli/genderlist.xyz" target="_blank" rel="noopener noreferrer")
          VsButton(color="#171515")
            .app-icon.me-1.mb-1
              AppIcon(name="charm:github" color="var(--color-text-02)")
            span.color-text-text-02 Github repository

        a(href="https://github.com/sponsors/selimdoyranli" target="_blank" rel="noopener noreferrer")
          VsButton(color="#171515")
            .app-icon.me-1.mb-1
              AppIcon(name="charm:heart" color="var(--color-text-02)")
            span.color-text-text-02 Github sponsors

        a(href="https://www.buymeacoffee.com/selimdoyranli" target="_blank" rel="noopener noreferrer")
          VsButton(color="#FD0")
            .app-icon.me-1.mb-1
              AppIcon(name="simple-icons:buymeacoffee" color="var(--color-text-02)")
            span.color-text-text-02 Donate
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['on-close'])

const dialog = reactive({
  isOpen: props.isOpen
})

watch(
  () => props.isOpen,
  value => {
    dialog.isOpen = value

    setTimeout(() => {
      if (value) {
        document.querySelector('.vs-dialog')?.classList.add('blur')
      } else {
        setTimeout(() => {
          document.querySelector('.vs-dialog')?.classList.remove('blur')
        }, 1000)
      }
    }, 0)
  }
)

const handleClose = () => {
  dialog.isOpen = false

  emit('on-close')
}
</script>

<style lang="scss" src="./AppCreditsDialog.component.scss"></style>
