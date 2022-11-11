// make a search to cocktails api

//utils function to retrieve and map the response for each request

const queryApi = async (url) => {
  let cocktails = [];
  const response = await fetch(url);

  if (!response.ok) {
    console.log("something went wrong!");
  }
  const { drinks } = await response.json();
  cocktails = drinks.map((item) => {
    return {
      _id: item.idDrink,
      name: item.strDrink,
      image: item.strDrinkThumb,
    };
  });
  return cocktails;
};

//search by letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a
export const searchCocktailsByLetter = async (query) => {
  return await queryApi(
    `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`
  );
};

//search by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
export const searchCocktailsByName = async (query) => {
  return await queryApi(
    `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
};

//search by category (here category is popular ingredients)
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
export const searchCocktailsByIngredient = async (query) => {
  return await queryApi(
    `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`
  );
};

//get full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
export const getCocktailDetails = async (id) => {
  const response = await fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!response.ok) {
    return {};
  }
  const { drinks } = await response.json();
  const selectedDrink = drinks[0];

  const ingredients = Object.keys(selectedDrink)
    .filter((key) => key.includes("Ingredient"))
    .reduce((arr, key) => {
      arr.push(selectedDrink[key]);
      return arr;
    }, []);
  const currentCocktail = {
    _id: selectedDrink.idDrink,
    name: selectedDrink.strDrink,
    image: selectedDrink.strDrinkThumb,
    description: selectedDrink.strInstructions,
    ingredients: ingredients,
  };
  return currentCocktail;
};
