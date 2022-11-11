import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { ADD_TO_SAVED } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";
import { getCocktailDetails } from "../utils/api";

const Detail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { id } = useParams();

  const [currentCocktail, setCurrentCocktail] = useState({});

  const { saved, cocktails } = state;

  const getById = async (id) => {
    const response = await getCocktailDetails(id);
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
    const { drinks } = await response.json();
    const selectedDrink = drinks[0];

    const ingredients = Object.keys(selectedDrink)
      .filter((key) => key.includes("Ingredient"))
      .reduce((arr, key) => {
        arr.push(selectedDrink[key]);
        return arr;
      }, []);
    setCurrentCocktail({
      _id: selectedDrink.idDrink,
      name: selectedDrink.strDrink,
      image: selectedDrink.strDrinkThumb,
      description: selectedDrink.strInstructions,
      ingredients: ingredients,
    });
  };
  useEffect(() => {
    //getting the cocktail bu id
    getById(id);
  });

  const addToSaved = (id) => {
    const savedItem = cocktails.find((cartItem) => cartItem._id === id);
    if (savedItem) {
      console.log("already saved");
    } else {
      dispatch({
        type: ADD_TO_SAVED,
        saved: { ...state.saved, currentCocktail },
      });
    }
  };

  return (
    <>
      {currentCocktail ? (
        <div className="container my-1">
          <Link to="/">← Back to Browse</Link>

          <h2>{currentCocktail.name}</h2>

          <p>{currentCocktail.description}</p>

          <p>
            <button onClick={addToSaved(currentCocktail._id)}>
              Add to Saved
            </button>
          </p>

          <img
            src={`/images/${currentCocktail.image}`}
            alt={currentCocktail.name}
          />
        </div>
      ) : null}
    </>
  );
};

export default Detail;
