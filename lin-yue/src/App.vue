<template>
  <div id="app">
    <router-view/>
    <NavBottom />
  </div>
</template>

<script>
import NavBottom from './components/navbottom.vue'
export default {
  components: {
    NavBottom
  }
  // data() {
  //   return {
      
  //   },
  //   components{
  //     NavBottom
  //   }
  // },
}
</script>

<!-- <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
