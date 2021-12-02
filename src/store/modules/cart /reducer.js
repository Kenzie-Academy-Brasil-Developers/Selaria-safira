import { ADD_CART } from "./actionType";

const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return action.updatedCart;
    default:
      return state;
  }
};
