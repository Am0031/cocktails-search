// make a search to cocktails api
//search by letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a
export const searchCocktailsByLetter = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`);
};

//search by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
export const searchCocktailsByName = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
};

//search by category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
export const searchCocktailsByCategory = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`);
};

//get full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
export const getCocktailDetails = (id) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
};
