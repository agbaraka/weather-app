const express = require('express');
const locations = require('./locations');
const owm = require('./owm')

const app = express();

app.get('/weather', async (req, res) => {

    let {loc} = req.query
    
    try{
        let data = await owm.getWeatherData(loc)

        res.status(data ? 200: 404).json(data)
    }catch(e){

        if (e.response){
            switch (e.response.status){
                case 404:
                    res.status(404).json()
                    break;
                default:
                    res.status(500).json(e.response.data)
                    break;
            }
        }else{
            res.status(500).json(e)
        }
        

    }
    
    
})

app.get('/locations', (req, res) => {
    res.json(locations)
})

module.exports = {
    path: '/api',
    handler: app
}
