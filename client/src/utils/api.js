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
export const getCocktailDetails = (id) => {
  return fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
};
