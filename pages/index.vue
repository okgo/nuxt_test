<template lang="pug">
  section.content
    .container
      app-logo
      h1.title test
      h2.subtitle Nuxt.js project
      .links
        a.button--green(
          href="https://nuxtjs.org/"
          target="_blank"
        ) Documentation
        a.button--grey(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
        ) GitHub
      .cards-list
        cardItem(
          v-for="(card, index) in cards"
          v-bind:card="card"
          :key="card.id"
          :index="index"
          v-on:remove="cards.splice(index, 1)"
        )
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import cardItem from '~/components/cardItem.vue'

export default {
  head: {
    bodyAttrs: {
      class: 'home-page'
    }
  },
  components: {
    AppLogo,
    cardItem
  },
  computed: {
    cards () { return this.$store.state.cards }
  }
}
</script>

<style>
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
