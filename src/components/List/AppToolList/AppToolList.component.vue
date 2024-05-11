<template lang="pug">
.app-tool-list
  template(v-for="item in list" :key="item.id")
    NuxtLink.card.app-tool-list-card(:to="localePath(`/${item.slug}`)" :title="item.title" :class="[getComingSoonClass(item)]")
      .app-tool-list-card__comingSoonBadge(v-if="item.id === 'todaysTensesTest'") Yakında
      .app-tool-list-card__border
      .app-tool-list-card__inner
        .app-tool-list-card__icon
          AppIcon(:name="item.icon" :width="24" :height="24")
        strong.app-tool-list-card__title {{ item.title }}
        button.app-tool-list-card__seeButton
          AppIcon(name="tabler:arrow-right" :width="24" :height="24")
</template>

<script lang="ts" setup>
import type { ListItemTypes, ListTypes } from './AppToolList.component.types'

const baseClassName = 'app-tool-list'

const list: Ref<ListTypes> = ref([
  {
    id: 'todaysWords',
    icon: 'tabler:abc',
    title: 'Günün kelimeleri',
    slug: 'gunun-kelimeleri'
  },
  {
    id: 'todaysIdioms',
    icon: 'tabler:device-ipad-question',
    title: 'Günün deyimleri',
    slug: 'gunun-deyimleri'
  },
  {
    id: 'todaysListeningTest',
    icon: 'tabler:volume',
    title: 'Duyduğunu yaz',
    slug: 'gunun-listening-testi'
  },
  {
    id: 'todaysTensesTest',
    icon: 'tabler:history',
    title: 'Geçmiş, şimdi, gelecek',
    slug: ''
  }
])

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

const getComingSoonClass = (item: ListItemTypes) => {
  return item.id === 'todaysTensesTest' ? `${baseClassName}-card--comingSoon` : null
}
</script>

<style lang="scss" src="./AppToolList.component.scss"></style>
