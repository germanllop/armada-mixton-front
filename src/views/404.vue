<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-1/2 bg-local bg-center bg-cover" style="background-image: url('./images/armada-cover.jpg');"></div>
        <div class="w-1/2 flex text-center justify-center content-center flex-col flex-wrap">
            <img src="/images/not_found.gif" alt="" class="w-1/2 my-3">
            <p class="my-3"><router-link class="bg-green-600 hover:bg-green-500 text-white py-2 px-4" to="/">Regresar</router-link></p>
        </div>
    </div>
</template>
<script>
export default {
    name: '404',
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