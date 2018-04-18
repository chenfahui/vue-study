<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <hello/>
  </div>
</template>

<script>
import hello from './components/HelloWorld'

export default {
  name: 'App',
  data(){
    return {
      message :'ccc'
    }
  },
  components: {
    hello
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
