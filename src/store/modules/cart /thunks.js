import { changeCart } from "./action";
export const addProductThunk = (newProduct) => {
  return (dispatch, getState) => {
    const { products } = getState();
    const updatedCart = { ...products, newProduct };
    dispatch(changeCart(updatedCart));
  };
};
