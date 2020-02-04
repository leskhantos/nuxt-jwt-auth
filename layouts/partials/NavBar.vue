<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">Nuxt Auth</nuxt-link>
      </div>
      <div class="navbar-menu">

        <div class="navbar-end">
          <template v-if="authenticated">
            <nuxt-link class="navbar-item" to="/dashboard">Dashboard</nuxt-link>
            <p class="navbar-item" @click.prevent="logout">{{user.name}} Log out</p>
          </template>
          <template v-else>
            <nuxt-link class="navbar-item" to="authorizate/login">Log In</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "NavBar",
      methods:{
          logout(){
            this.$auth.logout()
          }
      }
    }
</script>

<style scoped>

</style>
