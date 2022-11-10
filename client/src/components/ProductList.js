import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

import { UPDATE_PRODUCTS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

const ProductList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { cocktails } = state;

  return (
    <div className="my-2">
      <h2>Cocktails:</h2>
      {state.cocktails.length ? (
        <div className="flex-row">
          {state.cocktails.map((product) => (
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
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
};

export default ProductList;
