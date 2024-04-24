import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from 'redux-logger';

import { newsReducer } from "../reducers/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
