async function getWeather(event) {
    event.preventDefault();

    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();
    const resutDiv = document.getElementById("weatherResult");

    if (!city) {
        resutDiv.textContent="Please enter your city.";
        return;
    }

    const baseURL = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = `fe04d941928997213fa4c4d4b035b49d`;
    const url = `${baseURL}?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    resutDiv.textContent = "Fetching Data.....";

    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const weatherData = await response.json();
            console.log(weatherData);
        
        const {name, main, weather} = weatherData;

        resutDiv.textContent =
        `Weather in: ${name} 
        ${weather[0].discription} 
        Temprature: ${main.temp}°C 
        Humidity: ${main.humidity}%`

    }   catch (error) {
        console.error("Error fetching weather data!: ", error);
        resutDiv.textContent = `Error: ${error.massage}`;
    }

}