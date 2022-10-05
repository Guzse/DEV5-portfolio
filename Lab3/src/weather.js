const WEATHER_DATA = 'WEATHER_DATA';
const TIMESTAMP = 'TIMESTAMP';

export default class WeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        console.log(`Weather class initialized`);
    }

    getWeather(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

        // check if there is data in localstorage
        if (localStorage.getItem(WEATHER_DATA)) {
            // check if the data is older than 10 minutes
            if (Date.now() - localStorage.getItem(TIMESTAMP) > 600000) { 
                // if older than 10 minutes, delete the data
                console.log('Weather data is older than 10 minutes, deleting data');
                localStorage.removeItem(WEATHER_DATA);
                localStorage.removeItem(TIMESTAMP);
            }
            else {
                // if not older than 10 minutes, return the data
                console.log('Returning weather data from localstorage');
                return JSON.parse(localStorage.getItem(WEATHER_DATA));
            }
        }
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = data.weather[0].main;
                const temp = data.main.temp;
                localStorage.setItem(WEATHER_DATA, JSON.stringify({weather, temp}));
                localStorage.setItem(TIMESTAMP, Date.now());
                return { weather, temp };
            });
    }
}