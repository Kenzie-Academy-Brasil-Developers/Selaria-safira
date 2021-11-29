import { ADD_CART } from "./actionType";
export const changeCart = (addCart) => {
  return { type: ADD_CART, addCart };
};
