<template>
  <div>
    <h1>This the Lobby</h1>
  </div>
</template>

<script>
export default {
  name: 'Lobby',
  data(){
    return {

    }
  },
  mounted(){
    this.$store.dispatch('checkAuth') 
  },
  methods:{

  }
}
</script>
