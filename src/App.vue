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
  /* background: rgb(2,0,36); */
  /* background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #f35 0%,
    #43e 100%
  ); */

  background-image: radial-gradient(
    farthest-corner at 100% 100%,
    rgb(105 148 157) 0%,
    rgb(128,128,207) 35%,
    rgb(63,62,119) 69%,
    rgb(23,22,65) 89%,
    rgb(2,0,36) 100%
  );

  
/* background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(23,22,65,1) 11%, rgba(63,62,119,1) 31%, rgba(128,128,207,1) 65%, rgba(0,212,255,1) 100%); */
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
  overflow-y: auto
}
html {
  overflow: hidden;
}
</style>
