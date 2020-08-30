<template>
  <div>
    <button @click="x">换肤</button>
  </div>
</template>
<script>
export  default {
  inject:["themeName","changeTheme"],
  methods:{
    x(){
      this.changeTheme();
    }
  }
}
</script>