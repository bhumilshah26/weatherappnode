const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]


if(!address){
  console.log('Please provide an address')
}
else{
  geocode(address, (error, data) => {
    // either use if else or return statement inside the if block
      if(error){
        return console.log(error)
      }
      forecast(data, (error, forecastData) => {
        if(error){
          return console.log(error)
        }
  
       console.log(data.location)
       console.log(forecastData)
    })
  })
}




