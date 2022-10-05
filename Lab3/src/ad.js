const WEATHER_URI = "https://api.openweathermap.org/data/2.5/weather?";

export default class Ad {
    constructor(apiKey) {
        this.apiKey = apiKey;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.getWeather.bind(this)
            );
        } else {
            alert("This browser does not support geolocation");
        }
    }
}
