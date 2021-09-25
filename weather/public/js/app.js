console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// const messageOne = document.querySelector('#message-1')
// messageOne.textContent='Value from js/app.js --> index.hsb' //value return messageOne.message-1.<P> were message-1 is the id

const messageOutputData = document.querySelector('#message-2')
const messageOutputForecast = document.querySelector('#message-3')
const messageOutputLocation = document.querySelector('#message-4')





// fetch('https://puzzle.mead.io/puzzle').then((response)=>{

//     response.json().then((data)=>{
//         console.log(data)
//     })
// })


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    fetch('http://localhost:3002/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            messageOutputForecast.textContent =data.forecast
            messageOutputLocation.textContent =data.location

            console.log(data.location)
            console.log(data.forecast)

        }
    })
})
    // console.log('testing!')
    // console.log(location)

})