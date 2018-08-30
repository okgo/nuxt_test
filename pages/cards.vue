<template lang="pug">
  section.content
    div.container
      h2 {{pageTitle}}
      ul.cards-list
        li.card-item(v-for="(card, index) in cards", :key="index", )
          nuxt-link.card-item__inner(:to="'/cards/'+card.id", :id="card.id")
            h3 {{card.cardTitle}}
            h4.card-number Card Number: {{card.cardNumber}}
            p.card-balance Card Balance: {{card.balance}}
      .links
        transition(name="fade" mode="in-out")
          a(
            class="button--green"
            v-if="!visible"
            @click="visible = !visible"
            v-bind:key="visible"
            ) Add new card

        transition(name="fade" mode="out-in")
          form.add-new-card(v-if="visible" v-on:submit.prevent="")
            .row
              input#amount(type='number', placeholder='Enter amount')
</template>

<script>
  export default{
    head: {
      bodyAttrs: {
        class: 'credit-cards-page'
      }
    },
    data() {
      return {
        visible: false,
        pageTitle: 'Credit cards list',
        cards: [
          {id: '1', cardTitle: 'Credit card 1', cardNumber: '01', balance: '200'},
          {id: '2', cardTitle: 'Credit card 2', cardNumber: '02', balance: '700'},
          {id: '3', cardTitle: 'Credit card 3', cardNumber: '03', balance: '1000'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .cards-list {
    margin-top: 40px;
    text-align: left;
  }
</style>
