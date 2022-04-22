<template>
  <div id="app">
    <mainForm />
  </div>
</template>

<script>
import mainForm from './views/mainForm.vue'

export default {
  name: 'App',
  components: {
    mainForm
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: Metropolis, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

body{
  margin: 0;
  overflow: hidden;
}
</style>
