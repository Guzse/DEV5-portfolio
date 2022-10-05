export default class WeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    getWeather(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = data.weather[0].main;
                const temp = data.main.temp;

                return { weather, temp };
            });
    }
}