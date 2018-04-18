<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    {{ message }}
    <hello/>
    <todo-item></todo-item>
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
    hello,
    'todo-item':{
      template:'<div>这是个组件</div>'
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
