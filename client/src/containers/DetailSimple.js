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

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Browse</Link>
        <h2>The name of the cocktail</h2>
        <h2>The id of the cocktail : {id}</h2>

        <p>The description of the cocktail</p>

        <p>
          <button>Add to Saved</button>
        </p>
      </div>
    </>
  );
};

export default Detail;
