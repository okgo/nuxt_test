<template lang="pug">
  section.content
    div.container
      h2 {{pageTitle}}
      ul.users
        li(v-for="user in users" :key="user.id")
          nuxt-link(:to="'/users/'+user.id") {{ user.name }}
</template>

<script>
  import axios from 'axios'

  export default{
    head: {
      bodyAttrs: {
        class: 'users-page'
      }
    },
    data() {
      return {
        pageTitle: 'Users list'
      }
    },
    async asyncData() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return { users: data }
    }
  }
</script>

<style lang="scss">
  .users {
    margin-top: 40px;
    text-align: left;
    li {
      margin-top: 10px;
    }
  }
</style>
