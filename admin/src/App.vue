<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="stylus" scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
