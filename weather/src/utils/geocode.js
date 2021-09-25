//geocode is for fetching the latitude and longitude of given  location 
//forecast is to get weather of the specified Latitude & Longitude

const request = require('postman-request')

const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYW1hbHZrcCIsImEiOiJja3F3YWdhcjIwbWh5MnJsZm95ZnRhYnYwIn0.YiMO1SzfLFCRn4c5l5Jszw&limit=1'
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url: url, json: true }, (error, {body}) => { //(error,response) response will store the Latitude & Longitude data and output can extract by response.body.
        if (error) {
            callback('Unable to connect to location services! geocode.js', undefined)
        } else if (body.features.length === 0) {
            // callback('Unable to find location. Try another search.', undefined)
            console.log(body.features)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode