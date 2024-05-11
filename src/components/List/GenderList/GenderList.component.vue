<template lang="pug">
.gender-list
  .gender-list-group(v-for="group in groupedItems" :key="group.letter")
    strong.gender-list-group__title {{ group.letter }}

    .gender-list-group__items
      template(v-for="item in group.items" :key="item.title")
        NuxtLink.card.gender-list-card(:to="localePath(`/gender?id=${generateSlug(item.title)}`)" :title="item.title")
          .gender-list-card__border
          .gender-list-card__inner
            strong.gender-list-card__title {{ item.title }}
            button.gender-list-card__seeButton
              AppIcon(name="tabler:arrow-right" :width="24" :height="24")
</template>

<script lang="ts" setup>
import type { ListItemTypes, ListTypes } from './GenderList.component.types'
import genderList from '@/data/gender-list/en.json'

const baseClassName = 'gender-list'

const list: Ref<ListTypes> = ref([...genderList])

const groupedItems = computed(() => {
  const groups: Record<string, { letter: string; items: ListItemTypes[] }> = {}

  for (const item of list.value) {
    const letter = item.title.charAt(0).toUpperCase()

    if (!groups[letter]) {
      groups[letter] = { letter, items: [] }
    }
    groups[letter].items.push(item)
  }

  return Object.values(groups)
})

const makeGlowEffect = () => {
  window.onmousemove = e => {
    for (const card of document.querySelectorAll(`.${baseClassName}-card`)) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      if (card instanceof HTMLElement) {
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }
  }
}

onMounted(async () => {
  await nextTick()

  makeGlowEffect()
})
</script>

<style lang="scss" src="./GenderList.component.scss"></style>
