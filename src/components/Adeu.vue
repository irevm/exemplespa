<template>
    <div>
        <h1>Aquest és el component adéu</h1>
        <h2>{{$route.params.missatge}}</h2>
        <p v-if="$route.params.nom">{{ $route.params.nom }}</p>
        <input type="button" value="Ves a hola" @click="bota()">
    </div>
</template>

<script>
    export default {
        name: "Adeu",
        methods:{
            bota:function(){
                this.$router.push('/hola?salutacio=Hola, venc del component adeu');
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>