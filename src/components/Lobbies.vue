<template>
    <div class="flex flex-col h-full overflow-auto scrollbar mr-1 ">
        <LobbyItem v-for="lobby in lobbies" :key="lobby.code" :lobby="lobby"/>
    </div>
</template>

<script>
import LobbyItem from '../components/LobbyItem'
export default {
    name: 'Lobbies',
    data(){
        return {
            lobbies:[
                {
                    code:"ABC123",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC122525",
                    map: null,
                    status: "Jugando"
                },
                {
                    code:"ABC123252545",
                    map: "de_mirage",
                    status: "Jugando"
                },
                {
                    code:"ABC1525423",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC125423",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC12547223",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC12775753",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC126983",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC19623",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC168723",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC1778523",
                    map: "de_dust2",
                    status: "Jugando"
                },
                {
                    code:"ABC125875873",
                    map: "de_dust2",
                    status: "Jugando"
                },
            ]
        }
    },
    components:{
        LobbyItem
    },
    mounted(){

    },
    methods:{

    }
}
</script>