<template>
    <main v-if="weather && location" class="bg-blue-800 text-white text-center">
        <div class="m-auto lg:w-9/12">
            <div class=" pt-4">
                <div class="p-4">
                    
                    <nuxt-link to="locations" class="text-sm inline-block rounded-md text-white md:hover:text-blue-700 md:hover:bg-white py-1 px-3 border-2 border-solid border-white">
                        <span>Change City</span>
                    </nuxt-link>

                    <h1 class="text-3xl mt-6 mb-2 leading-none md:text-4xl vertical-align">{{ location.city }}</h1>
                    <span class="block text-sm capitalize">Last Updated: {{ formatLastUpdated(weather.current.dt) }}</span>
                </div>
                <div>
                    
                    <div class="md:flex justify-center px-4 items-center">
                        <div class="flex items-center text-center flex-wrap">
                        <div class="w-1/2 ">
                            <img class="inline-block" :src="`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`">
                        </div>
                        <div class="w-1/2">
                            <div class="text-6xl">{{ Math.round(weather.current.temp) }}&deg;C</div>
                            <div class="capitalize">{{ weather.current.weather[0].description }}</div>
                        </div>
                    </div>
                    <div class="border-r-2 border-gray-300 mx-2 h-full"></div>
                    <div class="my-4 md:m-0">
                        <div class="flex flex-wrap text-center justify-center text-lg md:text-2xl">
                            <div class="w-1/3 p-2 ">
                                <div class="">{{ Math.round(weather.current.feels_like) }}&deg;C</div>
                                <div class="text-sm">Feels Like</div>
                            </div>
                            <div class="w-1/3 p-2">
                                <div v-html="formatTime(weather.current.sunrise)"></div>
                                <div class="text-sm">Sunrise</div>
                            </div>
                            <div class="w-1/3 p-2">
                                <div>{{ weather.current.wind_speed }} ms<sup>-1</sup></div>
                                <div class="text-sm">Wind Speed</div>
                            </div>
                            
                            <div class="w-1/3 p-2">
                                <div>{{ weather.current.humidity }}%</div>
                                <div class="text-sm">Humidity</div>
                            </div>
                            <div class="w-1/3 p-2">
                                <div v-html="formatTime(weather.current.sunset)"></div>
                                <div class="text-sm">Sunset</div>
                            </div>
                            <div class="w-1/3 p-2">
                                <div>{{ weather.current.clouds }}%</div>
                                <div class="text-sm">Cloudiness</div>
                            </div>
                        
                        </div>
                    </div>  
                </div>
                </div>
                <div class="mt-12">
                    <div class="mb-4">
                        <span class="text-xl block">Next 8 Hours</span>
                        <div class="inline-block bg-white w-12 h-1"></div>
                    </div>
                    <div class="mt-6 overflow-x-auto relative lg:px-4">
                        <div class="flex no-wrap justify-start xl:justify-center md:mr-0">
                            <div class="px-1 lg:hidden"></div>
                            <div v-for="(d, i) in hourlyData" :key="i"
                                class="p-3 bg-blue-700 mx-1 text-center md:text-base rounded-lg inline-block">
                                <div class="w-20">
                                <div v-html="formatTime(d.dt)"></div>
                                <img class="inline-block w-20 bg-blue-700 rounded-full my-2" :src="`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`">
                                <div>{{ Math.round(d.temp) }}&deg;C</div>
                                </div>
                            </div>
                            <div class="px-1 lg:hidden"></div>
                        </div>
                    </div>
                </div>
                <div class="px-2 md:px-4 mt-12">
                    <div class="mb-4">
                        <span class="text-xl block">Next 7 days</span>
                        <div class="inline-block bg-white w-12 h-1"></div>
                    </div>
                    <div class="mt-6 text-center justify-center">
                        <div v-for="(d, i) in dailyData" :key="i" 
                            class="flex items-center text-sm bg-blue-700 p-3 rounded-lg md:p-4 md:p-0 md:text-base mt-2">
                            <div class="w-1/12"> 
                                <div v-html="formatDailyDateTime(d.dt)"></div>
                            </div>
                            <div class="md:w-3/12 items-center flex-1 flex md:flex-none pl-4 ">
                                <div>
                                    <img class="inline-block bg-blue-700 mx-3 rounded-full" :src="`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`">
                                </div>
                                <div class="text-sm capitalize">{{ d.weather[0].description.replace(" ", "&nbsp;") }}</div>
                                
                            </div>
                            <div class="md:w-2/12">
                                <div class="text-xl">{{ Math.round(d.temp.day) }}&deg;C</div>
                                <div class="text-sm hidden md:block">Day</div>
                            </div>
                            <div class="hidden md:block w-2/12">
                                <div class="text-xl">{{ Math.round(d.temp.night) }}&deg;C</div>
                                <div class="text-sm">Night</div>
                            </div>
                            <div class="hidden md:block w-2/12">
                                <div class="text-xl">{{ Math.round(d.humidity) }}%</div>
                                <div class="text-sm">Humidity</div>
                            </div>
                            <div class="hidden md:block w-2/12">
                                <div class="text-xl">{{ Math.round(d.temp.max) }}&deg;C</div>
                                <div class="text-sm">High</div>
                            </div>
                            <div class="hidden md:block w-2/12">
                                <div class="text-xl">{{ Math.round(d.temp.min) }}&deg;C</div>
                                <div class="text-sm">Low</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <div class="p-3 md:p-6 bg-gray-800 mt-4 md:mt-12">
            <a class="text-lg" href="https://albertshirima.com" target="_blank">albertshirima.com</a>
        </div>
    </main>
    
</template>

<script>

import dayjs from 'dayjs'
import * as timeago from 'timeago.js'

export default {

    async asyncData(ctx){
        
        let { loc } = ctx.query 

        if (loc === undefined){
            return
        }

        try{
            const { data } = await ctx.$axios.get(`/api/weather?loc=${loc}`)
            return data
        }catch(e){
            
            ctx.error({ statusCode: e.response.status })
        }
    },


    computed:{
        hourlyData(){

            let {dt} = this.weather.current

            return this.weather.hourly.filter((d, i) => d.dt > dt).slice(0, 8);
        },
        dailyData(){

            return this.weather.daily.slice(1, 8);
        },

    },

    data(){
        return {
            weather: null
        }
    },

    created(){

        if (!this.weather){
            this.$router.replace('locations')
        }
    },

    methods: {
        formatTime(unixTimestamp){
            return dayjs.unix(unixTimestamp).format('hh:mm A').replace(" ", '&nbsp;')
        },

        formatLastUpdated(unixTimestamp){
            return timeago.format(unixTimestamp * 1000)
        },

        formatDailyDateTime(unixTimestamp){
            return dayjs.unix(unixTimestamp).format('ddd DD.MM').replace(" ", '<br/>')
        },

        formatNumber(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
};
</script>

<style>

</style>
