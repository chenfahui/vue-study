<template>
    <div class="hello">
        <v-Header></v-Header>
        <h1 v-bind:title="reversedH1 + time" v-bind:id="'ID_'+dynamicId" v-bind:style="{'text-align':'center'}">{{ h1 }}</h1>
        <h2 v-html="h2+age" v-bind:class="{'title2':seen}" class="title"></h2>
        <input v-model.lazy.trim="h1" v-bind:class="classObject" v-on:keyup.enter="doSomething" />
        <button v-on:click="reverseMessage" v-bind:disabled="isButtonDisabled">逆转消息</button>
        <button @click="doSomething">添加项目</button>
        <button @click.once="doSomething">添加项目(一次)</button>
        <button @click.ctrl="doSomething">添加项目(含ctrl)</button>
        <button @click.ctrl.exact="doSomething">添加项目(仅ctrl)</button>
        <p v-if="seen" :class="['seen','seenToo',dynamicId]">{{ seen ? '你看到我了' : '你看不到我了' }}</p>
        <p v-else :class="{'noseen':!seen}">你看不到我了</p>
        <transition name="fade">
            <p v-show="seen">display:inline;</p>
        </transition>
        <div>            
            <input type="number" v-model.number="age" />
            <input type="number" v-bind:value="age" v-on:input="age = $event.target.value" >
        </div>
        <ol>
            <li v-for="(todo, index) in todos">{{index}} - {{ todo.id }}.{{ todo.text }}</li>
        </ol>
        <v-todo-item v-for="(item, index) in todos" v-bind:todos="todos" v-bind:todoing="item" v-bind:indexNumber="index" v-bind:key="item.id" v-bind:id="'todo_'+item.id" v-on:remove="todos.splice(index, 1)"></v-todo-item>
        <a v-bind:href="url" v-html="url"></a>
        <form v-on:submit.prevent="onSubmit">
            <input type="submit" name="" value="提交" />
        </form>
        <div v-if="loginType == 'username'">
            <label>Username</label>
            <input placeholder="Enter you firstname" />
            <input placeholder="Enter you email" key="email-input" />
        </div>
        <div v-else-if="loginType == 'email'">
            <label>Email</label>
            <input placeholder="Enter you email" key="email-input" />
        </div>
        <button v-on:click="toggleLogin">Toggle login type</button>
        <ul>
            <li v-for="(item, index) in items" >{{index}}.{{item.message}}</li>
        </ul>
        <button v-on:click="itemsSort">排序</button>
        <ul>
            <li v-for="(value, key, index) in object">{{index}}.{{key}}:{{value}}</li>
        </ul>
        <ul v-if="numbers.length">
            <li v-for="number in numbers" v-if="number % 2 == 0">{{number}}</li>
        </ul>
        <ul>
            <li v-for="number in evenNumbers">{{number}}</li>
        </ul>
        <ul>
            <li v-for="number in even(numbers)">{{number}}</li>
        </ul>
        <button v-on:click="counter += 1">点击{{counter}}次</button>
        <button v-on:click="greet('greet')">greet</button>
        <input type="checkbox" v-model="isChecked" id="isChecked" /><label for="isChecked">{{ isChecked }}</label>
        <div>
            <input type="checkbox" id="Jack" value="Jack" v-model="checkNames" />
            <label for="Jack">Jack</label>
            <input type="checkbox" id="John" value="John" v-model="checkNames"    />
            <label for="John">John</label>
            <input type="checkbox" id="Mike" value="Mike" v-model="checkNames"    />
            <label for="Mike">Mike</label>
        </div>
        <div>
            已选择：{{checkNames}}
        </div>
        <div>
            <input type="radio" id="one" value="one" v-model="picked">
            <label for="one">one</label>
            <input type="radio" id="two" value="two" v-model="picked">
            <label for="two">two</label>
        </div>
        <div>
            Picked:{{ picked }}
        </div>
        <div>
            <select v-model="letter" multiple>
                <option v-for="todo in todos" v-bind:value=" todo.id ">{{ todo.text }}</option>
            </select>
        </div>
        <div>下拉选择：{{letter}}</div>
        <input type="text" v-model="parentMsg" name="">
        <v-simple-counters message="点击" v-bind:myMessage="parentMsg" class="klass"></v-simple-counters>
        <div>{{total}}
            <v-button-counter v-on:increment="incrementTotal"></v-button-counter>
            <v-button-counter v-on:increment="incrementTotal" v-on:click.native="doTheThing"></v-button-counter>
        </div>
        <v-currency-input v-model="price"></v-currency-input>
        <div>
            <h1>我是父级组件</h1>
            <v-slot-component>
                <p>我是初始化内容</p>
                <p>我是初始化内容</p>
                <p slot="header" slot-scope="child">slot-header {{child.text}}</p>
                <p slot="footer">slot-footer</p>
            </v-slot-component>
        </div>
        <div>
            <v-awesome-list>
                <li slot="item" slot-scope="props">{{ props.id }}.{{ props.text }}</li>
            </v-awesome-list>
        </div>
        <div>
            <keep-alive>
                <transition name="renders" mode="out-in">
                    <component v-bind:is="currentView"></component>
                </transition>
            </keep-alive>
            <select v-model="currentView">
                <option value="v-Header">v-Header</option>
                <option value="v-Footer">v-Footer</option>
            </select>
        </div>
        <div v-bind:style="{fontSize:fontSize+'em'}">
            <v-blog-post v-for="todo in todos" v-bind:post="todo" v-bind:postFontSize="fontSize" v-on:resizeFontSize="resizeFontSize" v-bind:key="todo.id"></v-blog-post>
        </div>
        <div>
            <v-custom-input v-bind:value="h1" v-on:input="h1 = $event"></v-custom-input>
            <v-custom-input v-model="h1"></v-custom-input>
        </div>
        <div>
            <button v-on:click="currentTabComponent = 'v-home-component'">Home</button>
            <button v-on:click="currentTabComponent = 'v-posts-component'">Posts</button>
            <button v-on:click="currentTabComponent = 'v-archive-component'">Archive</button>
            <keep-alive>
                <component v-bind:is="currentTabComponent"></component>
            </keep-alive>
        </div>
        <div>
            <button v-on:click="renders = !renders">Toggle render</button>
            <transition name="renders">
                <div v-show="renders">hello</div>
            </transition>
        </div>
        <div>
            <button v-on:click="bounce = !bounce">Toggle bounce</button>
            <transition name="bounce" enter-active-class="bounce-enter-animate" v-bind:duration="3000" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:enter-cancelled="enterCancelled">
                <div v-if="bounce">bounce</div>
            </transition>
        </div>
        <div>
            <transition appear appear-class="appear-animate" appear-to-class="appear-animate-to" appear-active-class="appear-animate-active">
                <div>出场效果</div>
            </transition>
        </div>
        <div>
            <transition appear appear-class="appear-animate" appear-to-class="appear-animate-to" appear-active-class="appear-animate-active">
                <div v-if="isEditing" key="Save">Save</div>
                <div v-else key="Edit">Edit</div>
            </transition>            
            <div v-bind:key="isEditing">{{isEditing ? 'Save' : 'Edit'}}</div>
        </div>
        <div>
            <button>{{ buttonMessage }}</button>
        </div>
        <div>
            <transition name="onoff" mode="out-in">
                <button v-if="onoffToggle" :key="1" v-on:click="onoffToggle = !onoffToggle">on</button>
                <button v-else :key="2" v-on:click="onoffToggle = !onoffToggle">off</button>
            </transition>
        </div>
        <div>
            <button v-on:click="randomAdd">Add</button>
            <button v-on:click="randomRemove">Remove</button>
            <div>
                <transition-group name="list" tag="p">
                    <span v-for="item in listItem" :key="item" class="list-item">{{item}}</span>
                </transition-group>
            </div>
        </div>
        <v-Footer></v-Footer>
    </div>
</template>

<script>
import vHeader from './vHeader'
import vFooter from './vFooter'

export default {
    name: 'HelloWorld',
    data() {
        return {
            h1: 'Welcome to Your App',
            h2:'Essential Links',
            age:30,
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
            ],
            fontSize:1,
            items:[
                {id:'001', message:'Foo' },
                {id:'002', message:'Bar' }
            ],
            object:{
                firstname:'John',
                lastname:'Doe',
                age:30
            },
            loginType:'username',
            numbers:[1,2,3,4,5],
            counter:0,
            total:0,
            isChecked:true,
            checkNames:[],
            picked:'',
            parentMsg:'',
            letter:[],
            price:0,
            currentView:'v-Footer',
            currentTabComponent:'v-home-component',
            renders:false,
            bounce:false,
            isEditing:true,
            docState:'Save',
            onoffToggle:true,
            listItem:[1,2,3,4,5,6,7,8,9],
            nextNum:10
        }
    },
    computed:{ 
        reversedH1:{
            get:function(){
                return this.h1.split('').reverse().join('');
            }
        },
        classObject:function(){
            return 'text';
        },
        evenNumbers:function(){
            return this.numbers.filter(function(number){
                return number % 2 == 0;
            });
        },
        buttonMessage:function(){
            switch(this.docState){
                case 'Save' : return 'Edit'; break;
                case 'edited' : return 'Save'; break;
                case 'editing' : return 'Cancel'; break;
            }
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
        },
        toggleLogin:function(){
            console.log(this.loginType);
            if(this.loginType == 'email'){
                this.loginType = 'username';
            }else{
                this.loginType = 'email';                
            }
        },
        itemsSort:function(){
            this.items = [
                {id:'001', message:'Bar' },
                {id:'002', message:'Foo' }
            ]
        },
        even:function(numbers){
            return numbers.filter(function(number){
                return number % 2 == 1;
            });
        },
        greet:function(message){
            alert('HelloWorld'+this.h1);
            if(message){
                alert(message);
            }
        },
        incrementTotal:function(){
            this.total += 1;
        },
        doTheThing:function(){
            console.log('原生事件');
        },
        resizeFontSize:function(enlargeAmount){
            this.fontSize += enlargeAmount;
        },
        beforeEnter:function(){
            console.log('beforeEnter');
        },
        enter:function(){
            console.log('enter');
        },
        afterEnter:function(){
            console.log('afterEnter');
        },
        enterCancelled:function(){
            console.log('enterCancelled');
        },
        randomIndex:function(){
            return Math.floor(Math.random() * this.listItem.length);
        },
        randomAdd:function(){
            this.listItem.splice(this.randomIndex(), 0, this.nextNum++);
        },
        randomRemove:function(){
            this.listItem.splice(this.randomIndex(), 1);
        }
    },
    components:{
        'v-Header':vHeader,
        'v-Footer':vFooter,
        'v-todo-item':{
            props:['todos','todoing','indexNumber'],
            template:'<div>{{ todoing.id }}.这也是组件-{{ todoing.text }} <button v-on:click="$emit(\'remove\')">X</button><button v-on:click="removeTodo(todos, indexNumber)">{{ indexNumber }}</button></div>',
            methods:{
                removeTodo:function(todos, indexNumber){
                    todos.splice(indexNumber, 1);
                }
            }
        },
        'v-simple-counters':{
            props:['message','myMessage'],
            template:'<button v-on:click="counters += 1" class="klass1">{{ myMessage }}{{ message }}{{ counters }}</button>',
            data:function(){
                return {
                    counters:0
                }
            }
        },
        'v-button-counter':{
            template:'<button v-on:click="incrementCounter">{{ counterz }}</button>',
            data:function(){
                return {
                    counterz : 0
                }
            },
            methods:{
                incrementCounter:function(){
                    this.counterz += 1;
                    this.$emit('increment');
                }
            }
        },
        'v-currency-input':{
            template:'<div>$<input type="text" ref="prices" v-bind:value="value" v-on:input="updateValue($event.target.value)" /></div>',
            props:['value'],
            methods:{
                updateValue:function(value){
                    var formattedValue = value.trim();
                    // if(Number(formattedValue) != formattedValue){
                    //     formattedValue = 0;
                    // } 

                    console.log(formattedValue.indexOf('.') > -1);

                    if(formattedValue.indexOf('.') > -1){
                        formattedValue = formattedValue.slice(0,formattedValue.indexOf('.') + 3);
                        console.log(formattedValue);
                    }

                    this.$refs.prices.value = formattedValue;
                    // this.$emit('input',formattedValue);
                }
            }
        },
        'v-slot-component':{
            template:'<div>'+
                '<h2>我是子组件</h2>'+
                '<slot>只有在没有分发内容才显示</slot>'+
                '<slot name="header" text="hello from child">只有在没有分发内容才显示</slot>'+
                '<slot name="footer">只有在没有分发内容才显示</slot>'+
            '</div>'
        },
        'v-awesome-list':{
            template:'<ul><slot name="item" v-for="item in items" v-bind:text="item.text" v-bind:id="item.id"></slot></ul>',
            data:function(){
                return {
                    items:[
                        {id:0, text:'学习javascript'},
                        {id:1, text:'学习Vue'},
                        {id:2, text:'整个牛项目'},
                        {id:3, text:'找个靠谱岗位'}
                    ]
                }
            }
        },
        'v-blog-post':{
            props:['post','postFontSize'],
            template:'<div v-bind:style="{\'fontSize\':postFontSize}">{{ post.text }}<button v-on:click="$emit(\'resizeFontSize\', 0.1)" title="加大字号">+</button></div>'
        },
        'v-custom-input':{
            props:['value'],
            template:`
                <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
            `
        },
        'v-home-component':{
            template:'<div>Home component</div>'
        },
        'v-posts-component':{
            template:`
                <div>
                    Posts component
                    <button v-on:click="show = !show">toggle</button>
                    <transition name="fade">
                        <p v-show="show">hello</p>
                    </transition>
                </div>
            `,
            data:function(){
                return {
                    show:true
                }
            }
        },
        'v-archive-component':{
            template:'<div>Archive component</div>'
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.renders-enter{opacity:0;}
.renders-enter-active{transition:all .5s ease-out;}
.renders-enter-to{opacity:1;}
.renders-leave{opacity:1;}
.renders-leave-active{transition:all .5s ease-in;}
.renders-leave-to{opacity:0;}
.bounce-enter-animate{animation:bunce-in 2s;}
.bounce-leave-active{animation:bunce-in 2s reverse;}
@keyframes bunce-in{
    0%{
        transform:scale(0);
    }
    50%{
        transform:scale(1.5);
    }
    100%{
        transform:scale(1);
    }
}

.appear-animate{opacity:0;}
.appear-animate-active{transition:all 5s ease-out;}
.appear-animate-to{opacity:1;}

.onoff-enter{opacity:0;transform:translateX(15px);}
.onoff-enter-active{transition:all 1s ease-out;}
.onoff-enter-to{opacity:1;transform:translateX(0px);}
.onoff-leave{opacity:1;transform:translateX(0px);}
.onoff-leave-active{transition:all 1s ease-out;}
.onoff-leave-to{opacity:0;transform:translateX(-15px);}

.list-item{display:inline-block;vertical-align:top;margin:10px;}
.list-enter-active,.list-leave-active{transition:all 1s ease-out;}
.list-enter,.list-leave-to{opacity:0;transform:translateY(30px);}
.list-move{transition:1s;}
</style>
