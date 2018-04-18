<template>
  <div class="hello">
    <h1 v-bind:title="time">{{ msg }}</h1>
    <h2>Essential Links</h2>
  <input v-model="msg">
  <button v-on:click="reverseMessage">逆转消息</button>
  <p v-if="seen">你看到我了</p>
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your App',
      time:'页面加载于：'+new Date().toLocaleString(),
      seen : true,
      todos :[
        {text:'学习javascript'},
        {text:'学习Vue'},
        {text:'整个牛项目'},
        {text:'找个靠谱岗位'}
      ]
    }
  },
  methods:{
    reverseMessage:function(){
      this.msg = this.msg.split('').reverse().join('');
      this.seen = false;
      this.todos.push({text:'新项目'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
