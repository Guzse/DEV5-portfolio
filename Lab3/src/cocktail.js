const COCKTAIL_URI = "https://www.thecocktaildb.com/api/json/v1/1/";

export default class CocktailAPI {
    async getCocktailByName(name, extraFilters = '') {
        let url = `${COCKTAIL_URI}search.php?s=${name}${extraFilters}`;
        let response = await fetch(url);
        let search = await response.json();
        //console.log(search.drinks);
        return search.drinks[Math.floor(Math.random() * search.drinks.length)];
    }

    async getCocktailByIngredient(ingredient, extraFilters = '') {
        let url = `${COCKTAIL_URI}filter.php?i=${ingredient}${extraFilters}`;
        let response = await fetch(url);
        let search = await response.json();
        //console.log(search.drinks);
        return search.drinks[Math.floor(Math.random() * search.drinks.length)];
    }

    async getCocktailByCategory(category, extraFilters = '') {
        let url = `${COCKTAIL_URI}filter.php?c=${category}${extraFilters}`;
        let response = await fetch(url);
        let search = await response.json();
        //console.log(search.drinks);
        // return random object in search.drinks
        return search.drinks[Math.floor(Math.random() * search.drinks.length)];
    }

    async getRandomCocktail() {
        let url = `${COCKTAIL_URI}random.php`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }
}