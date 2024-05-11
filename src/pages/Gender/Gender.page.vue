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
import genderList from '@/data/gender-list/en.json'

const route = useRoute()

const gender = genderList.find(item => generateSlug(item.title) === route.query.id)
</script>

<style lang="scss" src="./Gender.page.scss"></style>
