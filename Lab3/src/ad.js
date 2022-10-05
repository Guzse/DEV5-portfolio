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

    createAd(cocktail) {
        console.log(cocktail);
        const nameElement = document.querySelector('.drink__name');
        const imageElement = document.querySelector('.drink__image');
        console.log(nameElement, frameElement);
        
        nameElement.textContent = cocktail.strDrink;
        // Change image src
        imageElement.src = cocktail.strDrinkThumb;
    }

    async findCocktail(position) {
        const {weather, temp} = {...await this.weatherAPI.getWeather(position)};
        console.log(`weather: ${weather}, temp: ${temp}`);
        let cocktail = null;

        if (weather === 'Clear') {
            if (temp > 20) {
                cocktail = await this.cocktailAPI.getCocktailByName('Pina Colada');
            } else if (temp < 5) {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Coffee');
            }
            else {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Gin', '&g=Martini Glass');
            }
        }
        else if (weather === 'Clouds') {
            if (temp > 20) {
                cocktail = await this.cocktailAPI.getCocktailByName('Margarita');
            } else if (temp < 5) {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Coffee');
            }
            else {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Vodka');
            }
        }
        else if (weather === 'Snow') {
            const blackList = ["14456", "12786", "12870"];
            while (cocktail === null || blackList.includes(cocktail.idDrink)) {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Tea');
            }
        }
        else if (weather === 'Rain') {
            if (temp > 15) {
                cocktail = await this.cocktailAPI.getCocktailByName('Ginger ale');
            }
            else {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Whiskey');
            }
        }
        else if (weather === 'Thunderstorm') {
            if (temp > 15) {
                cocktail = await this.cocktailAPI.getCocktailByName('Dark and Stormy');
            }
            else {
                cocktail = await this.cocktailAPI.getCocktailByIngredient('Whiskey');
            }
        }
        else {
            cocktail = await this.cocktailAPI.getRandomCocktail();
        }
        this.createAd(cocktail);
    }
}
