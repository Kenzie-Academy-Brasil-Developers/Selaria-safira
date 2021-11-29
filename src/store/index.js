import { createStore } from "redux";
import combineReducers from "./modules/rootReducer";
const reducers = combineReducers;
const store = createStore(reducers);
export default store;
