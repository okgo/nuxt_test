<template lang="pug">
  section.content
    div.container
      h2 {{pageTitle}}
      .cards-list
        cardItem(
          v-for="(card, index) in cards"
          v-bind:card="card"
          :index="index"
          :key="card.id"
          v-on:remove="cards.splice(index, 1)"
          )
      .links
        transition(name="fade" mode="in-out")
          a(
            class="button--green"
            v-if="!visible"
            @click="visible = true"
            v-bind:key="visible"
            ) Add new card

        transition(name="fade" mode="out-in")
          form.add-new-card(v-if="visible" v-on:submit.prevent="addCard")
            .row
              label(for="card-number") Card number
              input#card-number(
                type="number"
                placeholder="Enter card number"
                v-model.lazy="number"
                name="number"
              )
            .row
              button.button--green Add card
</template>

<script>
  // import { mapState } from 'vuex'
  import cardItem from '~/components/cardItem.vue'

  export default{
    head: {
      bodyAttrs: {
        class: 'credit-cards-page'
      }
    },
    data () {
      return {
        visible: false,
        pageTitle: 'Credit cards list',
        number: ''
      }
    },
    components: { cardItem },
    computed: {
      cards () { return this.$store.state.cards }
    },
    methods: {
      addCard: function () {
        if (this.number) {
          this.$store.commit('add', this.number)
          this.number = ''
          this.visible = false
        } else {
          alert('Enter number')
        }

      }
    }
  }
</script>

<style lang="scss">

</style>
