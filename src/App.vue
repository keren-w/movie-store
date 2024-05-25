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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
  display: flex;
  height: calc(100vh - 200px);
  overflow: hidden;
  margin: 100px
}
.router-container {
  width: 100%;
  overflow-y:scroll;
}
html {
  overflow: hidden;
}
</style>
