const COCKTAIL_URI = "https://www.thecocktaildb.com/api/json/v1/1/";

export default class CocktailAPI {
    async getCocktailByName(name) {
        let url = `${COCKTAIL_URI}search.php?s=${name}`;
        let response = await fetch(url);
        let cocktails = await response.json();
        // return random cocktail from list
        return cocktail.drinks[Math.floor(Math.random * cocktail.drinks.length)];
    }

    async getCocktailByIngredient(ingredient) {
        let url = `${COCKTAIL_URI}filter.php?i=${ingredient}`;
        let response = await fetch(url);
        let cocktail = await response.json();
        // return random cocktail from list
        return cocktail.drinks[Math.floor(Math.random * cocktail.drinks.length)];
    }
}