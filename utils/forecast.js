const request = require('request')

const forecast = ({latitude, longitude}, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=d9b8e3f6968a5182a99fccef4d1b6119&query=' + latitude + ',' + longitude
    request({url, json: true}, (error, { body }) => {

        if(error){
            callback('Unable to access the internet!', undefined)
        }
        else if(body.error){
            callback('Unable to fetch the weather!', undefined)
        }
        else {
            callback(undefined,
                `It is ${body.current.temperature} degrees. But, it feels like ${body.current.feelslike}`
            )
        }
    })
}

module.exports = forecast

// make url http request without using the request npm library but using modules that node provides
