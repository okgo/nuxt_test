<template lang="pug">
  section.content
    .container
      p.back-link
        nuxt-link(to="/cards") < Back to cards list
      .card-item(v-bind:title="card.cardTitle")
        .card-item__inner
          h2 {{ card.cardTitle }}
          h4.card-number Card Number: {{card.cardNumber}}
          p.card-balance Card Balance: {{card.balance}}
      .links
        transition(name="fade" mode="out-in")
          a(
            class="button--green"
            @click="seen = !seen"
            v-bind:key="seen"
            )  {{ !seen ? 'Add Balance' : 'Hide form' }}

      transition(name='fade')
        form.add-balance(v-if="seen" v-on:submit.prevent="add(card)")
          .row
            input#amount(type='number', placeholder='Enter amount')
          .row
            button(
              class="button--green"
              ) Add
</template>

<script>
export default{
  head: {
    bodyAttrs: {
      class: 'credit-card-page'
    }
  },
  data() {
    return {
      seen: false
    }
  },
  asyncData({ params }) {
    let cards = [
      {id: '1', cardTitle: 'Credit card 1', cardNumber: '01', balance: '200'},
      {id: '2', cardTitle: 'Credit card 2', cardNumber: '02', balance: '700'},
      {id: '3', cardTitle: 'Credit card 3', cardNumber: '03', balance: '1000'}
    ]
    let card = cards.find(function (card) { return card.id === params.id; })
    return { card }
  },
  methods: {
    add: function(card) {
      let input = document.getElementById('amount')
      let balance = parseInt(card.balance)
      let amount = parseInt(input.value)
      if (amount) {
        balance = balance + amount
        card.balance = balance
        input.value = ""
      } else {
        alert('Amount is blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .credit-card-page {
    section.content { text-align: left; }
    .card-item__inner {
      margin: 0;
      &:hover { border-color: #000; }
    }
  }
  .back-link { margin-bottom: 20px; }
  .add-balance {
    .row { margin-top: 20px; }
  }
</style>
