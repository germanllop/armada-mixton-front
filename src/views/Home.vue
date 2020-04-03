<template>
  <div class="flex">
    <div class="flex flex-col w-full">
      <Navbar/>
      <!-- <p class="flex-auto">banners</p> -->
      <Lobbies/>
    </div>
    <div class="flex flex-col w-390px shadow-left bg-blur backdrop-blur">
      <Profile/>
      <Friends/> 
    </div>

      
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Friends from '../components/Friends'
import Profile from '../components/Profile'
import Lobbies from '../components/Lobbies'

export default {
  name: 'Home',
  data(){
    return {

    }
  },
  components:{
    Navbar,
    Friends,
    Profile,
    Lobbies
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>
