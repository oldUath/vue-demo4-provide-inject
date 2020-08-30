<template>
  <div :class="`app theme-${themeName}`">
    <Children1></Children1>
    <button>X</button>
    <Children2></Children2>
    <button>X</button>
    <Children3></Children3>
    <button>X</button>
  </div>
</template>

<script>
import Children1 from './components/Children1.vue'
import Children2 from './components/Children2.vue'
import Children3 from './components/Children3.vue'

export default {
  name: 'App',
  components: {
    Children1:Children1,
    Children2:Children2,
    Children3:Children3
  },
  //在提供属性的地方写provide
  provide(){
    return{
      themeName:this.themeName,
      changeTheme:this.changeTheme
    }
  },

  data(){
    return {
      themeName:"red",
      fontSize:"normal"
    }
  },
  methods:{
    changeTheme(){
      if(this.themeName ==="blue"){
        this.themeName = "red"
      }else{
        this.themeName="blue"
      }
    }
  }

}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app.theme-blue button {
  background: blue;
  color: white;
}
.app.theme-blue{
  color: blue;
}
.app.theme-red button {
  background: red;
  color: white;
}
.app.theme-red{
  color: red;
}

</style>
