<template>
  <div>
    <div>
      <router-link to="/hola?salutacio=Bon dia!">Ves a hola</router-link>
    </div>
    <div>
      <!--<router-link to="/adeu/a reveure">Ves a adéu</router-link>-->
      <router-link :to="{ name: 'Adeu', params: { missatge: 'a reveure' }}">Ves a adéu</router-link>

    </div>   
  </div>
</template>

<script>

  export default {
    name: 'Home',
  }
</script>

<style scoped>

</style>