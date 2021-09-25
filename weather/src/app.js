const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Amal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Amal'
    })
})
app.get('/product',(req,res)=>{
    if(!req.query.address){
    console.log(req.query.address)
       return res.send({
            error:"You not provided an address"
        })
    }
    res.send({
        forecast:"Cloudy",
        location:"iringal",
        address:req.query.address
    })
    })

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Amal'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address! app.js'
        })
    }
    
//geocode is for fetching the latitude and longitude of given  location 
//forecast is to get weather of the specified Latitude & Longitude
    console.log("1")

    geocode(req.query.address, (error, {latitude,longitude,location}) => { //(error,data) data will store the geocode fun. output and can extract by data.latitude &data.longitude
        if (error) {
            return console.log(error)
        }

        forecast(latitude,longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }

           res.send({
               forecast:forecastData, // extract Weather data from forecast function
               location,  // extract location from forecast
               address:req.query.address //return value to address argument of geocode funtion and fetch latitude and longitude
           })
        })

    })
})


app.get('*', (req, res) => { //will run when wrong search 
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3002, () => {
    console.log('Server is up on port 3002.')
})

//here the web server is running 
//node app.js    ---- will create the localhost id in port after we can run with path of that function 
//http://localhost:3002