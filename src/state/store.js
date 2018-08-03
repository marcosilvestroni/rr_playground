import { applyMiddleware, combineReducers, createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger as reduxLoggerMiddleware } from "redux-logger";

import duckReducer from "./ducks/duck";

// Create history
const history = createHistory();

// Create rootReducer
const rootReducer = combineReducers({
  duck: duckReducer,
  router: routerReducer
});

// Create store's initial state
const initialState = {};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    reduxLoggerMiddleware({ collapsed: true }),
    routerMiddleware(history),
    thunkMiddleware
  )
);

export default store;
export { history };
