import { CHANGE_PRODUCT } from "./actionType";
const initialState = [];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT:
      const { products } = action;
      // console.log({ products });
      return products;
    default:
      return state;
  }
};
