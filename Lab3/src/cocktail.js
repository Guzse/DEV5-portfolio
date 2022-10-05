const COCKTAIL_URI = "https://www.thecocktaildb.com/api/json/v1/1/";

export default class CocktailAPI {
    async getCocktailByName(name) {
        let url = `${COCKTAIL_URI}search.php?s=${name}`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }

    async getCocktailByIngredient(ingredient) {
        let url = `${COCKTAIL_URI}filter.php?i=${ingredient}`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }

    async getCocktailByCategory(category) {
        let url = `${COCKTAIL_URI}filter.php?c=${category}`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }
}