const weatherAPIKey = '24be19bed4e26f727f83d491b08e3ca9';
const latitude = 32.7687;
const longitude = -97.3208;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

function displayWeather(data) {
    const weatherCard = document.getElementById('weather-card');
    const currentTemp = data.main.temp;
    const weatherDesc = data.weather[0].description;
    
    const currentWeather = `
        <p><strong>Current Temperature:</strong> ${currentTemp}°F</p>
        <p><strong>Description:</strong> ${weatherDesc}</p>
    `;
    
    weatherCard.innerHTML += currentWeather;
}

function displayForecast(data) {
    const weatherCard = document.getElementById('weather-card');
    let forecastHTML = '<h3>3-Day Forecast:</h3>';
    
    for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
        const temp = day.main.temp;
        const description = day.weather[0].description;

        forecastHTML += `
            <p><strong>${date}:</strong> ${temp}°F, ${description}</p>
        `;
    }
    
    weatherCard.innerHTML += forecastHTML;
}

getWeather();
getForecast();
