
// Author: Cody Jones, Carter Culkin

let weatherCollection = [];

export const getWeather = (lat, lon ,api) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${api}`)
    .then( response => response.json())
    .then( parsedResponse => {
        weatherCollection = parsedResponse.daily
        return weatherCollection;
    }) 
}

export const getCoordinates = (city) => {
    return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=Foga98e8F1D1FKlDBRT3uszpstaC0bNg&location=${city}`)
    .then(response => response.json())
    .then( parsedResponse => {
        let coordinates = {"lat": 0, "lon": 0}
        coordinates.lat = parsedResponse.results[0].locations[0].latLng.lat;
        coordinates.lon = parsedResponse.results[0].locations[0].latLng.lng;
        return coordinates;
    })
}
export const getCoordinatesforNashville = (city) => {
    return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=Foga98e8F1D1FKlDBRT3uszpstaC0bNg&location=Nashville`)
    .then(response => response.json())
    .then( parsedResponse => {
        let coordinates = {"lat": 0, "lon": 0}
        coordinates.lat = parsedResponse.results[0].locations[0].latLng.lat;
        coordinates.lon = parsedResponse.results[0].locations[0].latLng.lng;
        return coordinates;
    })

}