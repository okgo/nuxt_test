<template>
  <div>
    <app-menu/>
    <nuxt/>
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu.vue'

export default {
  head: {
    title: 'Credit Cards'
  },
  components: {
    AppMenu
  }
}
</script>
