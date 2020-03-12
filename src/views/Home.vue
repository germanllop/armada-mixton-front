<template>
  <div class="flex text-white">
    <div class="flex flex-col w-full">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 mr-6">
          <img src="images/logo.png" alt="Armada Offensive" width="200px">
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="lg:flex-grow">
            <router-link class="block mt-4 inline-block text-xl font-medium hover:text-white mr-4" to="/">Home</router-link>
            <router-link class="block mt-4 inline-block text-xl font-medium hover:text-white mr-4" to="/lobby">Lobby</router-link>

          </div>
          
        </div>
      </nav>
      <p class="flex-auto">banners</p>
      <p class="flex-auto">lobbies</p>
    </div>
    <div class="flex flex-col w-320px">
      <p class="flex-auto">Profile</p>
      <p class="flex-auto">friends</p>  
    </div>

      
  </div>
</template>

<script>

export default {
  name: 'Home',
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
