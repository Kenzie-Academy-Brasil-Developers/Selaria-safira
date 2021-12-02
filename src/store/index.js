import { createStore, applyMiddleware } from "redux";
import combineReducers from "./modules/rootReducer";
import thunk from "redux-thunk";
const reducers = combineReducers;
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
