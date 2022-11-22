# Weather Forecast Dashboard
This web application can be used to check the current day's weather conditions and the next five days weather conditions for a city that the user types in the search field. The citys that the user searched for will be displayed in a list and allow them to select that city again to show the updated weather conditions.

## Project Description
To build this application a HTML file, and JavaScript file was created. A CSS file was not used and instead Bootstrap was used to style the structure of the HTML file. The structure of the HTML file was created to make a simple user interface for the user to interact with. A search option is presented on the left side of the screen where the user can input a city to look up the weather conditions for. Once the user clicks the "Search" button, the current and next five days of weather conditions will be displayed to the screen. The city the user searched will then be displayed in a history list below the search button. The user can then select the previously searched cities and the cooresponding weather conditions will be displayed again to the screen. In order to make the page display the correct information a few functions were needed in the JavaScript file:
* A fetch was called to Open Weather Map's api to retrieve the weather data.
* In order to get the correct weather for the city the user searched an api call was made to Open Weather's geocoding api. This api gets the latitude and longitude of the city searched.
* Once the latitude and longitude was found, that info was put into another fetch call to retrieve the current day's weather conditions and the weather conditions for the next five days. 
* To better format the dates for the next five days, the DayJS library api was used.
* To set the text content for the current day and next five days, functions were created to dynamically input the weather conditions into the HTML elements based on the users input.
* In order to set the search items to the history list, the search items were saved to the local storage.
* A click event was added to the "Search" button so that when the user click it the fetch calls will be ran.
* A similar click event was added to the container of the history list items so that when the user selects an item from the list the fetch calls will be ran again with that new value. This click event was added to the container due to the fact that the list items are dynamically added to the page and to access those buttons we need to use event delegation to an element that is hard coded into the HTML file which was the container.

## Demo of Deployed site
* Below is a demo of a user inputting a city to the search field, that city being added to the search history list and the user selecting the search items to display their weather conditions.
![](./Assets/Images/Untitled_%20Nov%2021%2C%202022%2010_17%20PM.gif)

## Project URLs
* Deployed site URL: https://tobin-matt.github.io/weather-forecast-dashboard/
* GitHub Repo URL: https://github.com/Tobin-Matt/weather-forecast-dashboard