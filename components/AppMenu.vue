<template lang="pug">
  nav.main-menu
    .container
      ul
        li(v-for="(item) in items" :key="item.id")
          nuxt-link(:to="item.to") {{item.title}}
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 'home', title: 'Home', to: '/' },
        { id: 'cards', title: 'Credit cards', to: '/cards' },
        { id: 'users', title: 'Users', to: '/users' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #000;
    background: #fff;
    z-index: 100;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        text-decoration: none;
        font-weight: 700;
        opacity: 1;
        transition: opacity .3s;
        &.nuxt-link-exact-active { opacity: .5 }
      }
    }
  }
</style>
