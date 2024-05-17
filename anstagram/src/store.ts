import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import { userInfoReducer } from "./reducers/userInfo";
import { feedListReducer } from "./reducers/feedList";

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  feedList: feedListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));