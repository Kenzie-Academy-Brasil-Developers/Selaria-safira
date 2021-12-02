import { changeCart } from "./action";
export const addProductThunk = (newProduct) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const ids = cart.map((item) => item.id);
    if (!ids.includes(newProduct.id)) {
      const updatedCart = [...cart, newProduct];
      dispatch(changeCart(updatedCart));
    }
  };
};
export const removeItemThunk = (idToRemove) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const remove = cart.filter((product) => product.id !== idToRemove);
    dispatch(changeCart(remove));
  };
};
