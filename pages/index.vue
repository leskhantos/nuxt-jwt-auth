<template>
  <div class="container">
    <div>
      <h1>Home</h1>
      <p>{{authenticated}}</p>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>


