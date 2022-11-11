import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import {
  UPDATE_SEARCH_TYPE,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_CURRENT_LETTER,
  UPDATE_NAME,
} from "../utils/actions";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { searchTypes, currentSearchType, letters, categories, cocktailName } =
    state;

  const handleTypeClick = (type) => {
    dispatch({
      type: UPDATE_SEARCH_TYPE,
      currentSearchType: type,
    });
  };

  const handleLetterClick = (item) => {
    if (currentSearchType === 0) {
      dispatch({
        type: UPDATE_CURRENT_LETTER,
        currentLetter: item,
      });
    }
  };

  const handleCategoryClick = (item) => {
    if (currentSearchType === 1) {
      dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: item,
      });
    }
  };

  //function to handle input field change
  const handleChange = (event) => {
    dispatch({ type: UPDATE_NAME, cocktailName: event.target.value });
  };

  return (
    <div>
      <h2>Choose your search type:</h2>
      {searchTypes &&
        searchTypes.map((item, i) => (
          <button
            key={i}
            id={i}
            onClick={() => {
              handleTypeClick(i);
            }}
          >
            {item}
          </button>
        ))}
      <h2>Selected search type:</h2>
      {currentSearchType === 0 &&
        letters.map((item, i) => (
          <button
            key={item}
            id={item.toLowerCase()}
            onClick={() => {
              handleLetterClick(item.toLowerCase());
            }}
          >
            {item}
          </button>
        ))}
      {currentSearchType === 1 &&
        categories.map((item) => (
          <button
            key={item}
            id={item}
            onClick={() => {
              handleCategoryClick(item);
            }}
          >
            {item}
          </button>
        ))}
      {currentSearchType === 2 && (
        <>
          <form>
            <input
              style={{ width: "400px" }}
              id="search-input"
              value={cocktailName}
              placeholder="Enter a cocktail name"
              onChange={handleChange}
            ></input>
          </form>
        </>
      )}
    </div>
  );
};

export default CategoryMenu;
