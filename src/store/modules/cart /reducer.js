import { ADD_CART } from "./actionType";

const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { addCart } = action;
      return addCart;
    default:
      return state;
  }
};
