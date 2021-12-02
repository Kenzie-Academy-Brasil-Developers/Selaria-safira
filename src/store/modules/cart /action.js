import { ADD_CART } from "./actionType";
export const changeCart = (updatedCart) => {
  return { type: ADD_CART, updatedCart };
};
