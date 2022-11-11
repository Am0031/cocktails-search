import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { ADD_TO_SAVED } from "../utils/actions";

import { getCocktailDetails } from "../utils/api";

const Detail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { id } = useParams();

  const [currentCocktail, setCurrentCocktail] = useState({});

  const getById = async (id) => {
    const cocktail = await getCocktailDetails(id);
    setCurrentCocktail(cocktail);
  };

  useEffect(() => {
    getById(id);
  }, []);

  return (
    <>
      {currentCocktail ? (
        <div className="container my-1">
          <Link to="/">← Back to Browse</Link>
          <h2>{currentCocktail.name}</h2>
          <h4>{id}</h4>
          <img alt={currentCocktail.name} src={`${currentCocktail.image}`} />

          <h4>Instructions:</h4>
          <p>{currentCocktail.description}</p>

          <h4>Ingredients:</h4>
          {currentCocktail.ingredients ? (
            currentCocktail.ingredients.map((item, i) => {
              if (item) return <p key={`${id}-${i}`}>{item}</p>;
            })
          ) : (
            <p>No ingredients</p>
          )}
          <p>
            <button>Add to Saved</button>
          </p>
        </div>
      ) : (
        <h2>Cocktail not found</h2>
      )}
    </>
  );
};

export default Detail;
