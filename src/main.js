import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  components:{
    App
  },
data(){
  return {

  }
},
  template:`
  <App></App>
  `

}).$mount('#app')
