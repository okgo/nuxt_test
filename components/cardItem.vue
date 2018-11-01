<template lang="pug">
  .card-item
    a.remove-card(v-on:click="$emit(\'remove\')") x
    nuxt-link.card-item__inner(:to="'/cards/'+card.id")
      h3 {{card.cardTitle}}
      h4.card-number Card Number: {{ card.cardNumber }}
      p.card-balance Card Balance: {{ card.balance }}
</template>

<script>
  export default {
    props: {
      card: Object
    }
  }
</script>
