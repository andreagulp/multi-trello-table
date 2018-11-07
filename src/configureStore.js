import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(preloadedState) {
  const middlewares = [promiseMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(
    rootReducer /* preloadedState, */,
    composedEnhancers
  );
  return store;
}
