<template>
    <div >
      <h1>welcome to dashboard {{user.name}}</h1>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        name: "dashboard"
    }
</script>

<style scoped>

</style>
