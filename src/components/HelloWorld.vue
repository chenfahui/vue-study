<template>
  <div class="hello">
    <v-Header></v-Header>
    <h1 v-bind:title="time" v-bind:id="'ID_'+dynamicId">{{ h1 }}</h1>
    <h2 v-html="h2"></h2>
    <input v-model="h1">
    <button v-on:click="reverseMessage" v-bind:disabled="isButtonDisabled">逆转消息</button>
    <button @click="doSomething">添加项目</button>
    <p v-if="seen">{{ seen ? '你看到我了' : '你看不到我了' }}</p>
    <ol>
      <li v-for="todo in todos">{{ todo.id }}.{{ todo.text }}</li>
    </ol>
    <v-todo-item v-for="item in todos" v-bind:todoing="item" v-bind:id="'todo_'+item.id"></v-todo-item>
    <a v-bind:href="url" v-html="url"></a>
    <form v-on:submit.prevent="onSubmit">
      <input type="submit" name="" value="提交" />
    </form>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import vHeader from './vHeader'
import vFooter from './vFooter'

export default {
  name: 'HelloWorld',
  data () {
    return {
      h1: 'Welcome to Your App',
      h2:'Essential Links',
      url:location.href,
      time:'页面加载于：'+new Date().toLocaleString(),
      dynamicId:'dynamicId',
      isButtonDisabled:false,
      seen : true,
      todos :[
        {id:0, text:'学习javascript'},
        {id:1, text:'学习Vue'},
        {id:2, text:'整个牛项目'},
        {id:3, text:'找个靠谱岗位'}
      ]
    }
  },
  created:function(){
    console.log('实例被创建，'+this.time);
  },
  mounted:function(){
    this.$nextTick(function(){
      console.log('实例全部挂载');
    });
    console.log('实例被挂载，'+this.time);
  },
  updated:function(){
    this.$nextTick(function(){
      console.log('实例全部更新');
    });
    console.log('实例被更新，'+this.time);
  },
  destroyed:function(){
    console.log('销毁');
  },
  methods:{
    reverseMessage:function(){
      this.h1 = this.h1.split('').reverse().join('');
      this.seen = !this.seen;
      // this.$destroy();
    },
    onSubmit:function(){
      console.log('提交');
    },
    doSomething:function(){
      const todoId = this.todos.length;
      this.todos.push({id:todoId, text:this.h1});      
    }
  },
  components:{
    'v-Header':vHeader,
    'v-Footer':vFooter,
    'v-todo-item':{
      props:['todoing'],
      template:'<div>{{ todoing.id }}.这也是组件-{{ todoing.text }}</div>'
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
