import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { ADD_TO_SAVED, UPDATE_CURRENT_COCKTAIL } from "../utils/actions";

const ProductItem = (item) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/cocktail/${_id}`}>
        <img alt={name} src={`${image}`} />
        <p>{name}</p>
        <button>View details</button>
      </Link>
      <div></div>
    </div>
  );
};

export default ProductItem;
