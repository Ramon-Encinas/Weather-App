
let weather = {
    "apiKey": "17b858e552145f32ce10a3ea6e2ea98f"
}

//Does the same as fetchWeather but this one is using .then and fetch

/* function  fetchWeathers() {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Tijuana&units=metric&appid=17b858e552145f32ce10a3ea6e2ea98f"
        ) 
        .then((response) => response.json())
        .then((data) => console.log(data));
    } */
    

// Functionally the same as fetchWeathers, this one is using async/await   
async function fetchWeather(city) {

    // Get json file from API 
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" 
    + weather.apiKey);

    let cityData = await response.json();

    // Extract the desired data from json file and log it into console
    const getData = (cityData) => {
        const { name } = cityData;
        const { icon, description} = cityData.weather[0]; 
        // Since the data is inside an array we need to select the 1st element in order to access its date
        const { temp, humidity } = cityData.main; 
        const { speed } = cityData.wind
        console.log(name, temp, icon, description, humidity, speed);
        }
    

    // Call function
    getData(cityData);

}


//Test it with different cities
fetchWeather("Tijuana");
fetchWeather("Chicago");



