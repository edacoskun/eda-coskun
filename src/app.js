const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

//const fs = require('fs')

const addr = process.argv[2]

if(!addr)
{
    console.log('Lutfen bir adres giriniz...')
}else {
    geocode(addr, (err, data) => {
        if(err){
            return console.log(err)
        }else{
            weather(data.latitude, data.longitude, (err, weatherData) => {
                if(err){
                    console.log(err)
                }else{
                    console.log(data.location)
                    console.log(data.weatherData)
                }
            })
        }
    })
}



