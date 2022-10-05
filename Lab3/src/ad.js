import WeatherAPI from "./weather";
import CocktailAPI from "./cocktail";
const WEATHER_URI = "https://api.openweathermap.org/data/2.5/weather?";

export default class Ad {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.weatherAPI = new WeatherAPI(apiKey);
        this.cocktailAPI = new CocktailAPI();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.findCocktail.bind(this)); 
        } else {
            alert("This browser does not support geolcoation");
        }
    }

    async findCocktail(position) {
        const {weather, temp} = {...await this.weatherAPI.getWeather(position)};
        console.log(`weather: ${weather}, temp: ${temp}`);
        let cocktail = null;
        cocktail = await this.cocktailAPI.getCocktailByCategory('Coffee / Tea', '&i=Coffee');
        if (weather === 'Clear') {
            if (temp > 20) {
                cocktail = await this.cocktailAPI.getCocktailByName('Pina Colada');
            } else if (temp < 5) {
                cocktail = await this.cocktailAPI.getCocktailByCategory('Coffee / Tea', '&i=Coffee');
            }
            else {
                
            }
        }
        console.log(cocktail);
    }
}
