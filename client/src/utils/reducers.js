import {
  ADD_TO_CART,
  UPDATE_CURRENT_LETTER,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

const initialState = {
  products: [],
  categories: [],
  currentCategory: "",
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  currentLetter: "",
  cart: [],
  cartOpen: false,
};

//reducer function - arguments: initial state/state and actions
const reducers = (state = initialState, action) => {
  //add all reducer cases with switch/case syntax
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
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

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default reducers;
