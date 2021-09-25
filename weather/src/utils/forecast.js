const request = require('postman-request') //access_key=a6a69699a6875c17d04fc333aa9cd5c9

const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a6a69699a6875c17d04fc333aa9cd5c9&query=' + latitude + ',' + longitude
    console.log("Lat& Lon 3",latitude,longitude)

    request({ url: url, json: true }, (error, {body}) => {//(error,response) response will store the weather api data and output can extract by response.body.
        if (error) {
            callback('Unable to connect to weather service! forecast.js', undefined)

        } else if (!!body.error) {
            callback('Unable to find locationc ! forecast.js' , undefined)

        } else {
            // callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
            callback(undefined,body.current.weather_descriptions) //returning weather_description to app.js
            console.log("4 Temperature in ! forecast.js ",body.location.name,"is",body.current.temperature,"° C")
        }
    })
}

module.exports = forecast