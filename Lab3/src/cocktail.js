const COCKTAIL_URI = "https://www.thecocktaildb.com/api/json/v1/1/";

export default class CocktailAPI {
    async getCocktailByName(name, extraFilters = '') {
        let url = `${COCKTAIL_URI}search.php?s=${name}${extraFilters}`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }

    async getCocktailByIngredient(ingredient, extraFilters = '') {
        let url = `${COCKTAIL_URI}filter.php?i=${ingredient}${extraFilters}`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }

    async getCocktailByCategory(category, extraFilters = '') {
        let url = `${COCKTAIL_URI}filter.php?c=${category}${extraFilters}`;
        let response = await fetch(url);
        let search = await response.json();
        return search.drinks[0];
    }
}