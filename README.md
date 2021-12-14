# Hello welcome to my weather app

This application was created using React/Javascript and https://openweathermap.org/current to retrieve current weather data.

The openWeather current api is very limited on what values it can return as well accept. 

on the homepage users are asked to type in their local zipCode (this will not work if a users zipCode is not within the US)

on Button click the application will grab the zipCode and use it to call a get request to the api which will then return an Object of weather data

this weather data is then populated in the UI for the user to see.

# Some side notes

the selected Api can only return current weather data meaning the temp highs and lows will sometimes be innacurate since it does not pull data for the entire day

My main purpose of this project was to demonstrate my ability to use React and Axios to create an API based weather application. So I didn't scale the UI to be formatted correctly on Iphone, Tablets, and 4k screens. the perferred resolution would be 1440x900. If you wish to see a Project where I scale a landing page to fit all media screens I recomend looking at my First-Project file that is pinned on my profile.  

#Problems and Solutions during development 

When calling the get request the promise would first be returned as pending then the doc would return empty JSX elements and then finally the result of the promise would be returned. 

my solution for this was to call the promise inside of the componentDidMount lifecycle hook and then setting that data to the state of the class component 
