<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function (){
    return{
      persones:[{id: 1, nom: "Pepito"}, {id: 2, nom: "Pepita"}],
    }           
  },
  mounted: function() {   
    this.$router.push({ name: "Home" });
    //this.$router.push({ name: "Adeu2", params:{ nom: this.persones[1].nom } } );
  },
  components: {
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
