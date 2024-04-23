import { applyMiddleware, combineReducers, createStore } from "redux";
import { lottoNumberReducers } from "../reducers/lottoNumbers";
import logger from "redux-logger";

const rootReducer = combineReducers({
  numbers: lottoNumberReducers
});
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
