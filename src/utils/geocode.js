const request = require('request')
const geocode = (addr, callback) => { 
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.place'+encodeUrlComponent(addr) + '.json?access_token=pk.eyJ1IjoiaWZzNSIsImEiOiJjbDFveGZ2cjIxNjV3M2tvMm1kaW45mJf3In0.jakzckr8Zkj8Xdbo8yQ05w'
}

request({url:url, json:true}, (err, res)=>{
    if(err)
    {
        callback('Servise ulasilamadi...', undefined)
    }else if (res.body.features.length === 0)
    {
        callback('Boyle bir lokasyon bulunamadi...', undefined)
    }else{
        callback(undefined, {
            longitute= res.body.feature[0].center[0],
            latitude= res.body.feature[0].center[1],
            location= res.body.feature[0].place_name
        })
    }
    
})

module.exports = geocode