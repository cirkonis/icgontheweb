<template>
  <div id="app">
    <title>MikesHomeWork</title>
    <img alt="Vue logo" src="./assets/mHWlogo.png">
    <HelloWorld msg="Lucky you! You found where mike will put his homework :D"/>
    <button class="google" v-on:click="goGoogle">Maybe find something else to do?</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    goGoogle:function(){
      window.open("https://www.google.com");
}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .google{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
