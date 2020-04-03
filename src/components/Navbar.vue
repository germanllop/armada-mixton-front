<template>
    <nav class="flex items-center justify-between flex-wrap p-5">
        <div class="flex items-center flex-shrink-0 mx-5">
          <img src="images/logo.png" alt="Armada Offensive" width="200px">
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="lg:flex-grow">
            <router-link active-class="nav-link-active" class="nav-link" to="/">Mixtones</router-link>
            <router-link active-class="nav-link-active" class="nav-link" to="/lobby">Mi Lobby</router-link>
            <router-link active-class="nav-link-active" class="nav-link" to="/players">Jugadores</router-link>
            <router-link active-class="nav-link-active" class="nav-link" to="/servers">Servers</router-link>

          </div>
          
        </div>
      </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>