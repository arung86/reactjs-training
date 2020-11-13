import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducer";
import postsReducer from "./posts/reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ user: reducer, post: postsReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
