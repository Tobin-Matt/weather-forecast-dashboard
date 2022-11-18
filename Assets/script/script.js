var searchBtn = document.querySelector('#search-button');
var cityName = document.querySelector('#city-name-current');
var currentDate = document.querySelector('#current-date');
var currentTemp = document.querySelector('#current-temp');
var currentWind = document.querySelector('#current-wind');
var currentHumidity = document.querySelector('#current-humidity');

var fetchLatLon = function (event) {
    var searchEl = document.querySelector('#weather-search');
    var userSearch = searchEl.value;
    var cityLink = 'http://api.openweathermap.org/geo/1.0/direct';
    cityLink = cityLink + '?q=' + userSearch + '&limit=1&appid=d894dc28106fb0afb7dba285f293ba3b'
    console.log(cityLink);

    fetch(cityLink) 
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response[0].lat);
        console.log(response[0].lon);
        fetchCurrentForecast(response[0].lat, response[0].lon); 
    })   
}

var fetchCurrentForecast = function (lat, lon) {
    var forecastLink = 'http://api.openweathermap.org/data/2.5/weather'; 
    forecastLink = forecastLink + '?lat=' + lat + '&lon=' + lon + '&appid=d894dc28106fb0afb7dba285f293ba3b&units=imperial';
    console.log(forecastLink); 

    fetch(forecastLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        cityName.textContent = response.name;
        var today = dayjs().format('M/D/YYYY');
        currentDate.textContent = today;
        console.log(currentDate);
        var iconCode = response.weather[0].icon;
        var weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png'
        document.querySelector('img').src = weatherIconUrl;
        currentTemp.textContent = 'Temperature: ' + response.main.temp + ' °F'
        currentWind.textContent = 'Wind Speed: ' + response.wind.speed + ' MPH'
        currentHumidity.textContent = 'Humidity: ' + response.main.humidity + ' %'
    })
}

searchBtn.addEventListener ('click', fetchLatLon);

//need city name, icon representation for weather, date, temp, humidity, wind speed
//api call gives results for every 3 hours for the next five days




// fetch for the next five days
// fetch(forecastLink)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         console.log(response);
//         cityName.textContent = response.city.name;
//         var iconCode = response.list[0].weather[0].icon;
//         var weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png'
//         document.querySelector('img').src = weatherIconUrl;
//     })