import { toast } from "react-toastify";
import { addProduct, removeProduct } from "./actions";

export const addProductThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updatedCart = [...cart, product];
    localStorage.setItem("@KenzieShop:cart", JSON.stringify(updatedCart));
    dispatch(addProduct(updatedCart));
    toast.success("Produto adicionado ao carrinho!");
  };
};

export const removeProductThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updatedCart = cart.filter((_, index) => index !== product);
    localStorage.setItem("@KenzieShop:cart", JSON.stringify(updatedCart));
    dispatch(removeProduct(updatedCart));
    toast.success("Produto removido com sucesso!");
  };
};
