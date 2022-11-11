import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { ADD_TO_SAVED, UPDATE_CURRENT_COCKTAIL } from "../utils/actions";

const ProductItem = (item) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id } = item;

  const { cocktails } = state;

  const viewDetails = (id) => {
    console.log(`going to cocktail details - ${id}`);
    // const savedItem = cocktails.find((cartItem) => cartItem._id === _id);
    // if (savedItem) {
    //   console.log("already saved");
    // } else {
    //   dispatch({
    //     type: ADD_TO_SAVED,
    //     cocktails: { ...cocktails, selectedCocktail },
    //   });
    // }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/cocktail/${_id}`}>
        <img alt={name} src={`${image}`} />
        <p>{name}</p>
      </Link>
      <div></div>
      <button onClick={() => viewDetails(_id)}>View details</button>
    </div>
  );
};

export default ProductItem;
