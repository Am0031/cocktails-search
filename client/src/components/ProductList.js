import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

import spinner from "../assets/spinner.gif";
import { UPDATE_COCKTAILS } from "../utils/actions";
import { searchCocktailsByLetter } from "../utils/api";

const ProductList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    currentSearchType,
    currentLetter,
    currentCategory,
    cocktailName,
    cocktails,
  } = state;

  //function to get cocktails by letter
  const getByLetterAndDispatch = async (letter) => {
    const response = await searchCocktailsByLetter(letter);
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
    const { drinks } = await response.json();
    const cocktails = drinks.map((item) => {
      return {
        _id: item.idDrink,
        name: item.strDrink,
        image: item.strDrinkThumb,
      };
    });
    dispatch({
      type: UPDATE_COCKTAILS,
      cocktails: cocktails,
    });
  };

  useEffect(() => {
    if (currentSearchType === 0 && currentLetter.length > 0) {
      getByLetterAndDispatch(currentLetter);
    }
  }, [currentLetter, getByLetterAndDispatch]);

  return (
    <div className="my-2">
      <h2>Cocktails:</h2>
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
        <h3>You haven't started any search yet!</h3>
      )}
    </div>
  );
};

export default ProductList;
