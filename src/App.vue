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
  background-image: radial-gradient(
    farthest-corner at 100% 100%,
    rgb(105 148 157) 0%,
    rgb(128,128,207) 35%,
    rgb(63,62,119) 69%,
    rgb(23,22,65) 89%,
    rgb(2,0,36) 100%
  );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
  display: flex;
  height: calc(100vh - 200px);
  overflow: hidden;
  margin: 100px
}
.router-container {
  width: 100%;
  overflow-y: auto;
  scrollbar-color: white #1A1A1A;
  scrollbar-width: thin;
}
html {
  overflow: hidden;
}
</style>
