var apiKey = 'd894dc28106fb0afb7dba285f293ba3b';
var searchBtn = document.querySelector('#search-button');
var cityName = document.querySelector('#city-name-current');
var currentDate = document.querySelector('#current-date');
var currentTemp = document.querySelector('#current-temp');
var currentWind = document.querySelector('#current-wind');
var currentHumidity = document.querySelector('#current-humidity');

// 5 Days forecasted variables.
var forecastDates = document.querySelectorAll('#forecast-date');


var fetchLatLon = function (event) {
    var searchEl = document.querySelector('#weather-search');
    var userSearch = searchEl.value;
    var cityLink = 'http://api.openweathermap.org/geo/1.0/direct';
    cityLink = cityLink + '?q=' + userSearch + '&limit=1&appid=' + apiKey
    console.log(cityLink);

    fetch(cityLink) 
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response[0].lat);
        console.log(response[0].lon);
        fetchCurrentForecast(response[0].lat, response[0].lon); 
        fetchForecast(response[0].lat, response[0].lon);
    })   
}

var fetchCurrentForecast = function (lat, lon) {
    var forecastLink = 'http://api.openweathermap.org/data/2.5/weather'; 
    forecastLink = forecastLink + '?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';
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

var fetchForecast = function (lat, lon) {
    var forecastLink = 'http://api.openweathermap.org/data/2.5/forecast'; 
    forecastLink = forecastLink + '?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';
    console.log(forecastLink);

    fetch(forecastLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        
        //Display dates to the next five day forecast cards
        for (var i = 1; i < 6; i++) {
            var nextFiveDays = dayjs().add([i], 'day').format('M/D/YYYY');
            forecastDates[i-1].innerHTML = nextFiveDays;
        }
        //Add weather icon to 5 day forecast cards, the 3 lines of comments below will print the correct icon to the first forecast card but not all.
        var iconCode = response.list[4].weather[0].icon;
        var weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
        document.querySelector('#forecast-icon-1').src = weatherIconUrl;
        iconCode = response.list[12].weather[0].icon;
        weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
        document.querySelector('#forecast-icon-2').src = weatherIconUrl;
        iconCode = response.list[20].weather[0].icon;
        weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
        document.querySelector('#forecast-icon-3').src = weatherIconUrl;
        iconCode = response.list[28].weather[0].icon;
        weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
        document.querySelector('#forecast-icon-4').src = weatherIconUrl;
        iconCode = response.list[36].weather[0].icon;
        weatherIconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
        document.querySelector('#forecast-icon-5').src = weatherIconUrl;

        // var forecastCards = [1, 2, 3, 4, 5];

        // for (var i = 0; i < forecastCards.length; i++) {
        //     var forecastTemp = document.querySelectorAll('#forecast-temp-' + forecastCards[i]);
        //     console.log(forecastTemp);
        //     forecastTemp[0].innerHMTL = response.list[4].main.temp;
        // }

        var forecastTemp = document.querySelectorAll('#forecast-temp-1');
        forecastTemp[0].innerHTML = 'Temp: ' + response.list[4].main.temp + ' °F';
        var forecastWind = document.querySelectorAll('#forecast-wind-1');
        forecastWind[0].innerHTML = 'Wind: ' + response.list[4].wind.speed + ' MPH';
        var forecastHumidity = document.querySelectorAll('#forecast-humidity-1');
        forecastHumidity[0].innerHTML = 'Humidity: ' + response.list[4].main.humidity + ' %';

        forecastTemp = document.querySelectorAll('#forecast-temp-2');
        forecastTemp[0].innerHTML = 'Temp: ' + response.list[12].main.temp + ' °F';
        forecastWind = document.querySelectorAll('#forecast-wind-2');
        forecastWind[0].innerHTML = 'Wind: ' + response.list[12].wind.speed + ' MPH';
        forecastHumidity = document.querySelectorAll('#forecast-humidity-2');
        forecastHumidity[0].innerHTML = 'Humidity: ' + response.list[12].main.humidity + ' %';

        forecastTemp = document.querySelectorAll('#forecast-temp-3');
        forecastTemp[0].innerHTML = 'Temp: ' + response.list[20].main.temp + ' °F';
        forecastWind = document.querySelectorAll('#forecast-wind-3');
        forecastWind[0].innerHTML = 'Wind: ' + response.list[20].wind.speed + ' MPH';
        forecastHumidity = document.querySelectorAll('#forecast-humidity-3');
        forecastHumidity[0].innerHTML = 'Humidity: ' + response.list[20].main.humidity + ' %';

        forecastTemp = document.querySelectorAll('#forecast-temp-4');
        forecastTemp[0].innerHTML = 'Temp: ' + response.list[28].main.temp + ' °F';
        forecastWind = document.querySelectorAll('#forecast-wind-4');
        forecastWind[0].innerHTML = 'Wind: ' + response.list[28].wind.speed + ' MPH';
        forecastHumidity = document.querySelectorAll('#forecast-humidity-4');
        forecastHumidity[0].innerHTML = 'Humidity: ' + response.list[28].main.humidity + ' %';

        forecastTemp = document.querySelectorAll('#forecast-temp-5');
        forecastTemp[0].innerHTML = 'Temp: ' + response.list[36].main.temp + ' °F';
        forecastWind = document.querySelectorAll('#forecast-wind-5');
        forecastWind[0].innerHTML = 'Wind: ' + response.list[36].wind.speed + ' MPH';
        forecastHumidity = document.querySelectorAll('#forecast-humidity-5');
        forecastHumidity[0].innerHTML = 'Humidity: ' + response.list[36].main.humidity + ' %';
    })
}

function createHistoryList () {
    var searchCity = document.querySelector('#weather-search');
    var searchListContainer = document.querySelector('#history-list');
    console.log(searchCity);
    var searchItem = document.createElement("button");
    searchItem.setAttribute('class', 'list-group-item m-2 btn btn-secondary');
    searchItem.textContent = searchCity.value;
    searchListContainer.appendChild(searchItem);
    console.log(searchItem);
    localStorage.setItem('city', JSON.stringify(searchItem.textContent));
    var searchHistoryItem = JSON.parse(localStorage.getItem('city'));
    console.log(searchHistoryItem);
    searchItem.addEventListener('click', function () {
        fetchLatLon();
    })
} 

searchBtn.addEventListener('click', function () {
    fetchLatLon();
    createHistoryList();
})

// searchBtn.addEventListener('click', fetchLatLon)
// createHistoryList();