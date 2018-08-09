// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Goods from './components/goods'
import Ratings from './components/ratings'
import Seller from './components/seller'

Vue.config.productionTip = false

const NotFound = {template:'<p>Page not found</p>'}
const Home = {template:'<p>Home page<a href="../about">about</a></p>'}
const About = {template:'<p>About page<a href="../home">home</a></p>'}

const routes = {
    '/home':Home,
    '/about':About,
    '/goods':Goods,
    '/ratings':Ratings,
    '/seller':Seller
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    currentRoute:window.location.pathname
  },
  components: { App },
  template: '<App/>',
  computed:{
    ViewComponent(){
        return routes[this.currentRoute] || App;
    }
  },
  render(h){
    return h(this.ViewComponent)
  }
})
