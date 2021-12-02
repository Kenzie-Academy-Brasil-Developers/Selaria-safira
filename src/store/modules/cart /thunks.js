import { changeCart } from "./action";
export const addProductThunk = (newProduct) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updatedCart = [...cart, newProduct];
    dispatch(changeCart(updatedCart));
  };
};
