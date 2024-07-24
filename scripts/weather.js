// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Define latitude and longitude for Trier, Germany
const latitude = 32.9748;
const longitude = -97.3477;

// Specify other parameters
const units = 'imperial'; // For temperature in Fahrenheit
const apiKey = '24be19bed4e26f727f83d491b08e3ca9'; 

// Construct the full URL with parameters
const fullUrl = `${url}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    const response = await fetch(fullUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Testing output
      displayResults(data); // Call function to display results in HTML
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to display results in the HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// Call the apiFetch() function to initiate data retrieval and display
apiFetch();