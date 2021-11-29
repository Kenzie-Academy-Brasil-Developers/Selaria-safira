import { combineReducers } from "redux";
import { userReducer } from "./product/reducer";
import { cartReducer } from "./cart /reducer";

export default combineReducers({
  userReducer,
  cartReducer,
});
