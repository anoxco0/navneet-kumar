import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "redux";

import thunk from "redux-thunk";

import {
  sendReducer
} from "./contact/reducer";
import { homeReducer } from "./home/reducer";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const rootReducer = combineReducers({
  sendMessage: sendReducer,
  home:homeReducer,
})
export const store = createStore(rootReducer, enhancer)