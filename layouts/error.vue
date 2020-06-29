<template>
    <div class="text-center bg-blue-800 text-white min-h-screen flex flex-col justify-center">
        <div>
        
            <span class="text-5xl">{{ error.statusCode ? error.statusCode: 500 }}</span>
            <p class="text-base">
                <template v-if="error.statusCode === 404">
                    Sorry! Weather information for this location is not available
                </template>
                <template v-else>
                    Whoops! Something went wrong!
                </template>
            </p>
      
            <div class="mt-8">
                <nuxt-link 
                    class="inline-block rounded-md text-white md:hover:text-blue-700 md:hover:bg-white text-base font-semibold py-1 px-3 border-2 border-solid border-white"
                    to="/" >
                    Go back home
                </nuxt-link>
            </div>
            
        </div>
        
        </div>
        
    </div>
</template>

<script>
export default {
    props: ["error"],
};
</script>
