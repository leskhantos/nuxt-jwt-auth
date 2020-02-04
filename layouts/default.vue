<template>
  <div>
    <NavBar/>
    <nuxt />
  </div>
</template>

<script>
  import NavBar from "./partials/NavBar";
  export default {
    components:{
      NavBar
    }
  }
</script>
