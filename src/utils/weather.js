const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=81c6957beda8a6484399&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json:true}, (error, res) => {
        if (err) {
            callback('Servise ulasilamadi...', undefined)
        } else if (res.body.error) {
            callback('Servise ulasilamadi...', undefined)
        } else {
            callback(undefined, 'Hava ' + res.body.current.weather_descriptions[0] + 
            ' hava sicakligi ' + res.body.current.temperature + 
            ' hissedilen ' + res.body.current.feelslike + 
            ' derece')
        } 
    })
}

module.exports = weather