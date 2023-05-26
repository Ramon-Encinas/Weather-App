
let weather = {
    "apiKey": ""
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
async function displayWeather(city) {

    // Get json file from API 
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" 
    + weather.apiKey);

    let cityData = await response.json();

    // Extract the desired data from json file and log it into console
    const getData = (cityData) => {
        const { name } = cityData;
        // Since the data is inside an array we need to select the 1st element in order to access its date
        const { icon, description} = cityData.weather[0]; 
        const { temp, humidity } = cityData.main; 
        const { speed } = cityData.wind
        console.log(name, temp, icon, description, humidity, speed);
        
        // Display the desired data into the divs 
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";       
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description.charAt(0).toUpperCase() + description.slice(1);
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = 'Wind Speed: ' + speed + " km/h";
    };

    // Search bar functionality 
    const search = () => {
        displayWeather(document.querySelector(".search-bar").value)
    }

    document.querySelector(".search-button").addEventListener("click", function() {
        search();
    })

    document.querySelector(".search-bar").addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            search();
        }
    })

        
    // Call function
    getData(cityData);
        
    }
    

//Test it with different cities
displayWeather("Berlin");



