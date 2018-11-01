import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    cards: [
      {id: 1, cardTitle: 'Credit card 1', cardNumber: '01', balance: 200},
      {id: 2, cardTitle: 'Credit card 2', cardNumber: '02', balance: 700},
      {id: 3, cardTitle: 'Credit card 3', cardNumber: '03', balance: 1000}
    ]
  },

  getters: {
    getCardById: (state) => (id) =>{
      return state.cards.find(card => card.id === parseInt(id) )
    },
    getCardsListWithoutCurrent: (state) => (id) =>{
      return state.cards.filter(function (card) {
        return card.id != id
      })
    }
  },

  mutations: {
    add (state, number) {
      let cardId = state.cards.length + 1
      state.cards.push({
        id: cardId,
        cardTitle: 'Credit card ' + cardId,
        cardNumber: number,
        balance: 0
      })
    },
    addBalance (state, payload) {
      payload.card.balance += parseInt(payload.amount)
    },
    takeBalance (state, payload) {
      payload.card.balance -= parseInt(payload.amount)
    }
  }
})

export default store
