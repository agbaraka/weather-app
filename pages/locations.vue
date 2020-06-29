<template>
    <div class="bg-gray-800 p-4 text-white min-w-full min-h-full absolute flex justify-center">
        <div class="text-xl py-10 text-center md:w-9/12 w-full">
            <div class="mb-4">
                <span class="text-3xl block ">Select City</span>
                <div class="inline-block bg-white w-12 h-1"></div>
            </div>
            <div class="my-4">
                <input v-model="search" placeholder="eg. Dodoma" class="w-full bg-gray-800 px-4 py-2 border-2 border-solid border-white rounded-md " type="text">
            </div>
            <ul class="md:flex flex-wrap md:text-left">
                <li v-for="l in filteredLocations" :key="l.id" class="mb-3 lg:w-1/4 md:w-1/3">
                    <nuxt-link :to="{name:'index', query:{ loc: l.id }}">
                        {{ l.city  }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
export default {

    async asyncData({ $axios }){
        const { data } = await $axios.get('/api/locations')

        return {
            locations: data
        }
    },

    computed:{
        filteredLocations(){
            return this.locations.filter(l => {
                return l.city.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },

    data:() => ({
        locations:[],
        search: ''
    })
}
</script>
<style>

</style>
