<template lang="pug">
.page.gender-page
  ClientOnly
    .container
      .page-head
        h1.page-head__title {{ gender.title }}
        p.page-head__description
          template(v-if="gender.description?.length > 0") {{ gender.description }}
          template(v-else) {{ $t('list.noDescription') }}

      NuxtLink(:to="localePath('/')" :title="$t('general.goHome')")
        VsButton(size="small") {{ $t('general.goHome') }}
</template>

<script lang="ts" setup>
import genderListEn from '@/data/gender-list/en.json'
import genderListDe from '@/data/gender-list/de.json'
import genderListNl from '@/data/gender-list/nl.json'
import genderListTr from '@/data/gender-list/tr.json'

const { locale } = useI18n()

const activeLocale = computed(() => {
  return locale.value
})

const activeList = computed(() => {
  if (activeLocale.value === 'en') return genderListEn

  if (activeLocale.value === 'de') return genderListDe

  if (activeLocale.value === 'nl') return genderListNl

  if (activeLocale.value === 'tr') return genderListTr
})

const route = useRoute()

const gender = activeList.value?.find(item => generateSlug(item.title) === route.query.id)
</script>

<style lang="scss" src="./Gender.page.scss"></style>
