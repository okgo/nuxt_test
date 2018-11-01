<template lang="pug">
  section.content
    .container
      p.back-link
        nuxt-link(to="/cards") < Back to cards list
      .card-container
        .card-item(v-bind:title="card.cardTitle")
          .card-item__inner
            h2 {{ card.cardTitle }}
            h4.card-number Card Number: {{card.cardNumber}}
            p.card-balance Card Balance: {{card.balance}}
      .send-balance-container
        h2 Send Balance
        a.button--green(
          @click="toggleCardsList"
          v-bind:key="showCardsList"
          ) {{ !showCardsList ? 'Show cards list' : 'Hide cards list' }}
        .cards-list(v-if="showCardsList")
          h3 Select card
          .card-item(href="#" v-for="(card, index) in cards" :id="card.id" :key="card.id" :index="index" :class="{selected:card.id == selectedCard}")
            button(@click="selectCard(card, $event)") Select
            .card-item__inner
              h3 {{card.cardTitle}}
              h4.card-number Card Number: {{ card.cardNumber }}
              p.card-balance Card Balance: {{ card.balance }}
        div
          form.send-balance(v-if="showSendBalanceForm" v-on:submit.prevent="sendBalance(card, cardTo)")
            .row
              input#amoun-send(type='number' placeholder='Amount' v-model.lazy="amountToSend" name='amountToSend')
            .row
              button.button--green Send
</template>

<script>
import { mapGetters } from 'vuex'

export default{
  head: {
    bodyAttrs: {
      class: 'credit-card-page'
    }
  },
  data() {
    return {
      showCardsList: false,
      selectedCard: undefined,
      showSendBalanceForm: false,
      amount: '',
      amountToSend: '',
      cardTo: {}
    }
  },
  computed: {
    ...mapGetters(['getCardById', 'getCardsListWithoutCurrent']),
    card () { return this.getCardById(this.$route.params.id) },
    cards () { return this.getCardsListWithoutCurrent(this.$route.params.id) }
  },
  methods: {
    sendBalance: function (cardFrom, cardTo) {
      if (!this.amountToSend) {
        alert('Amount is blank')
      } else if (this.amountToSend > cardFrom.balance) {
        alert('Not enough money')
      }  else {
        this.$store.commit('takeBalance', {
          card: cardFrom,
          amount: this.amountToSend
        })
        this.$store.commit('addBalance', {
          card: cardTo,
          amount: this.amountToSend
        })
        this.amountToSend = ""
        this.selectedCard = undefined
        this.showSendBalanceForm = false
        alert('Balance sended')
      }
    },
    toggleCardsList: function () {
      this.showCardsList = !this.showCardsList
      this.selectedCard = undefined
      this.showSendBalanceForm = false
    },
    selectCard: function (el, event){
      this.selectedCard = el.id
      this.showSendBalanceForm = true
      this.cardTo = el
    }
  }
}
</script>

<style lang="scss" scoped>
  .credit-card-page {
    section.content { text-align: left; }
  }
  .back-link { margin-bottom: 20px; }
</style>
