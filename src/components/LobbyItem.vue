<template>
    <!-- <div class="flex flex-wrap">
        <div v-if="lobby.map" class="w-64 h-48 bg-local bg-cover bg-center m-3 hover:shadow-glow"
         :style="{backgroundImage: 'url(./images/bg/'+lobby.map+'.png)'}">
            {{ lobby.code }}
        </div>
        <div v-else class="w-64 h-48 bg-local bg-cover bg-center m-3 hover:shadow-glow" style="background-image: url('./images/bg/lobby.png')">
            {{ lobby.code }}
        </div>
    </div> -->
        <div v-if="lobby.map" class="flex flex-shrink-0 items-center flex-row h-20 bg-gray-800 mx-20 my-2 bg-dark-blur pl-2 pr-3 py-1 ">
            <img class="h-16 mr-5" :src="'./images/maps/logo/'+lobby.map+'.png'" :alt="lobby.map">
            <p class="mr-5">
                Codigo: {{ lobby.code }} <br/>
                Mapa: {{ lobby.map }} <br/>
                Estado: Jugando
            </p>
            <div class="flex flex-row flex-grow mr-5 justify-end">
                <img class="h-8 rounded-full mr-1" src="/images/profiles/profile2.jpg" alt="">
                <img class="h-8 rounded-full mr-1" src="/images/profiles/profile3.jpg" alt="">
                <img class="h-8 rounded-full mr-1" src="/images/profiles/profile4.jpg" alt="">
            </div>
            <router-link class="bg-green-600 hover:bg-green-500 text-white py-2 px-4 h-10" to="/">Unirse</router-link>
        </div>
        <div v-else class="flex flex-shrink-0 items-center flex-row h-20 bg-gray-800 mx-20 my-2 bg-dark-blur pl-2 pr-3 py-1 ">
            <img class="h-16 mr-5" src='/images/armada-cuy.png' alt="Armada Offensive">
            <p class="mr-5">
                Codigo: {{ lobby.code }} <br/>
                Mapa: {{ lobby.map }} <br/>
                Estado: Jugando
            </p>
            <div class="flex flex-row flex-grow mr-5 justify-end">
                <img class="h-8 rounded-full mr-1" src="/images/profiles/profile2.jpg" alt="">
                <img class="h-8 rounded-full mr-1" src="/images/profiles/profile3.jpg" alt="">
                <img class="h-8 rounded-full mr-1" src="/images/profiles/profile4.jpg" alt="">
            </div>
            <router-link class="bg-green-600 hover:bg-green-500 text-white py-2 px-4 h-10" to="/">Unirse</router-link>
        </div>
        
</template>

<script>
export default {
    name: 'LobbyItem',
    data(){
        return {
            
        }
    },
    props:{
        lobby: Object,
    },
    mounted(){

    },
    methods:{

    }
}
</script>