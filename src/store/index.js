import { createStore } from "redux";
import combineReducers from "./modules/rootReducer";
import { userReducer } from "./modules/product/reducer";
const reducers = combineReducers;
const store = createStore(reducers);
export default store;
