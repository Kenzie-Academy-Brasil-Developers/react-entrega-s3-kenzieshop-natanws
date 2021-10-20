import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.updatedCart;
    case REMOVE_PRODUCT:
      return action.updatedCart;
    default:
      return state;
  }
};

export default cartReducer;
