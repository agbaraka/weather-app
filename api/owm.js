const axios = require('axios');
const locations = require('./locations')
const NodeCache = require('node-cache')
const config = require('./config')

const cache = new NodeCache()

export const getWeatherData = async (locationId) => {

    let location = locations.find((l) => locationId === l.id)

    if (!location){
        return null
    }

    let url = getUrl(location.lng, location.lat)

    let data;

    data = cache.get(url)

    if (data === undefined){      
        let response = await axios.get(url)
        data = response.data
        cache.set(url, data, config.owm.cacheTTL)
    }

    return {
        weather: data,
        location,
    }
    
}

function getUrl(lon, lat) {
    return `https://api.openweathermap.org/data/2.5/onecall?appid=${config.owm.apiKey}&units=metric&lon=${lon}&lat=${lat}`
}