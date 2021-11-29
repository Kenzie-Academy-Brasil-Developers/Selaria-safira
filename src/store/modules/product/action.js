import { CHANGE_PRODUCT } from "./actionType";
export const changeProducts = (products) => {
  return { type: CHANGE_PRODUCT, products };
};
