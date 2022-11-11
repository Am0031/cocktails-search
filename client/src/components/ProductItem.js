import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { ADD_TO_SAVED } from "../utils/actions";

const ProductItem = (item) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity } = item;

  const { cocktails } = state;

  const addToSaved = () => {
    const selectedCocktail = cocktails.find((cartItem) => cartItem._id === _id);
    const savedItem = cocktails.find((cartItem) => cartItem._id === _id);
    if (savedItem) {
      console.log("already saved");
    } else {
      dispatch({
        type: ADD_TO_SAVED,
        cocktails: { ...cocktails, selectedCocktail },
      });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span>${price}</span>
      </div>
      <button onClick={addToSaved}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
