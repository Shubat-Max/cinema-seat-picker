import { createStore, compose, applyMiddleware } from "redux";
import createRootReducer from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

/**
 * configure store
 */
export const configureStore = preLoadedState => {
  return createStore(
    createRootReducer(),
    preLoadedState ? preLoadedState : {},
    compose(
      applyMiddleware(
        thunk,
        logger
      )/*,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
  );
};
