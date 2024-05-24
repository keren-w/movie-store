<template>
  <NavBar />
  <router-view class="router-container"/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
html {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.router-container {
  width: 100%;
  overflow-y: scroll;
}
</style>
