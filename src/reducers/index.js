import { combineReducers } from "redux";
import session from "./session";
import order from "./order";

/**
 * Root reducer creator
 */
const createRootReducer = () =>
  combineReducers({
    session,
    order
  });

export default createRootReducer;
