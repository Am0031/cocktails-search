import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { ADD_TO_SAVED } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

const Detail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { id } = useParams();

  const [currentCocktail, setCurrentCocktail] = useState({});

  const { cocktails } = state;

  useEffect(() => {
    // already in global store
    if (cocktails.length) {
      setCurrentCocktail(cocktails.find((product) => product._id === id));
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("cocktails", "get").then((indexedcocktails) => {
        dispatch({
          type: UPDATE_COCKTAILS,
          cocktails: indexedcocktails,
        });
      });
    }
  }, [cocktails, data, loading, dispatch, id]);

  const addToSaved = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      console.log("already saved");
    } else {
      dispatch({
        type: ADD_TO_SAVED,
        cocktails: { ...state.cocktails, currentCocktail },
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
            <strong>Price:</strong>${currentProduct.price}{" "}
            <button onClick={addToSaved}>Add to Saved</button>
          </p>

          <img
            src={`/images/${currentCocktail.image}`}
            alt={currentCocktail.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
};

export default Detail;
