<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Chatboy project-name="ssafy-house"
             language-code="ko"
             access-token="ya29.c.El9VB8MF7HtkfKhw6O1-aB8CFAU0ReJzQncaaPQFwExkGW---_JeqtBj_ISplF-T0N2Hj59Qor8iYgNAS6VHwko7AlFUBppBOnFjh58j0Vl5ViIucx4NCzrCAcuhEfcMUA"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Chatboy from "./components/Chatboy.vue";

export default {
  name: 'app',
  components: {
    HelloWorld,
    Chatboy,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
