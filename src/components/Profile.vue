<template>
    <div class="flex flex-col">
        <div class="flex m-2">
            <img class="rounded-sm shadow" src="/images/profile.jpg" alt="" width="65px">
            <div class="flex-auto ml-3">
                <p class="shadow-sm">{{$store.state.me.name}}</p>
                <p>Conectado</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Profile',
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