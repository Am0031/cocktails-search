import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

import { UPDATE_COCKTAILS } from "../utils/actions";
import {
  searchCocktailsByIngredient,
  searchCocktailsByLetter,
  searchCocktailsByName,
} from "../utils/api";

const ProductList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    searchTypes,
    currentSearchType,
    currentLetter,
    currentCategory,
    cocktailName,
    cocktails,
  } = state;

  //function to get cocktails by letter
  const getByLetterAndDispatch = async (letter) => {
    const cocktails = await searchCocktailsByLetter(letter);
    dispatch({
      type: UPDATE_COCKTAILS,
      cocktails: cocktails,
    });
  };

  //function to get cocktails by category
  const getByCategoryAndDispatch = async (category) => {
    const cocktails = await searchCocktailsByIngredient(category);
    dispatch({
      type: UPDATE_COCKTAILS,
      cocktails: cocktails,
    });
  };

  //function to get cocktails by name
  const getByNameAndDispatch = async (name) => {
    const cocktails = await searchCocktailsByName(name);
    dispatch({
      type: UPDATE_COCKTAILS,
      cocktails: cocktails,
    });
  };

  //useEffect to trigger api search by letter
  useEffect(() => {
    if (currentSearchType === 0 && currentLetter.length > 0) {
      getByLetterAndDispatch(currentLetter);
    }
  }, [currentLetter]);

  //useEffect to trigger api search by category
  useEffect(() => {
    if (currentSearchType === 1 && currentCategory.length > 0) {
      getByCategoryAndDispatch(currentCategory);
    }
  }, [currentCategory]);

  //useEffect to trigger api search by cocktail name
  useEffect(() => {
    if (currentSearchType === 2 && cocktailName.length > 0) {
      getByNameAndDispatch(cocktailName);
    }
  }, [cocktailName]);

  return (
    <div className="my-2">
      <h2>Results for {searchTypes[currentSearchType]}</h2>
      {cocktails.length ? (
        <div className="flex-row">
          {cocktails.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
            />
          ))}
        </div>
      ) : (
        <h3>No data to display</h3>
      )}
    </div>
  );
};

export default ProductList;
