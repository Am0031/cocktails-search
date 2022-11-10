import {
  ADD_TO_CART,
  UPDATE_CURRENT_LETTER,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

//split states into relevant groups and then consolidate them into one initial state with spread operator - to look into when rebuilding
const initialState = {
  cocktails: [],
  searchTypes: ["letters", "categories", "name"],
  currentSearchType: 0,
  categories: ["gin", "vodka", "bourbon", "rum", "tequila"],
  currentCategory: 0,
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  name: "",
  currentLetter: 0,
  saved: [],
  cartOpen: false,
};

//reducer function - arguments: initial state/state and actions
const reducers = (state = initialState, action) => {
  //add all reducer cases with switch/case syntax
  switch (action.type) {
    case ADD_TO_SAVED:
      return {
        ...state,
        saved: [...state.saved, action.cocktail],
      };
    case UPDATE_SEARCH_TYPE:
      return {
        ...state,
        currentSearchType: action.currentSearchType,
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case UPDATE_CURRENT_LETTER:
      return {
        ...state,
        currentLetter: action.currentLetter,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case UPDATE_COCKTAILS:
      return {
        ...state,
        cocktails: [...action.cocktails],
      };
    case REMOVE_FROM_SAVED:
      let newState = state.saved.filter((item) => {
        return item._id !== action._id;
      });

      return {
        ...state,
        saved: newState,
      };
    case CLEAR_SAVED:
      return {
        ...state,
        saved: [],
      };
    default:
      return state;
  }
};

export default reducers;
