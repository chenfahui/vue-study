<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    {{ message }}
    <v-hello/>
    <v-todo-item></v-todo-item>
  </div>
</template>

<script>
import hello from './components/HelloWorld'

export default {
  name: 'App',
  data(){
    return {
      message :'start'
    }
  },
  components: {
    'v-hello':hello,
    'v-todo-item':{
      template:'<div>end</div>'
    }
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
