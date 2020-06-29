require('dotenv').config()

module.exports = {
    owm :{
        apiKey: process.env.OWM_API_KEY,
        cacheTTL: parseInt(process.env.OWM_CACHE_TTL) || 3600
    },
}