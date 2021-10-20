import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const addProduct = (updatedCart) => ({
  type: ADD_PRODUCT,
  updatedCart,
});

export const removeProduct = (updatedCart) => ({
  type: REMOVE_PRODUCT,
  updatedCart,
});
