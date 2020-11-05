import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import garmentReducer from "./reducer";

function getStore() {
  const middlewares = [thunk];

  let store: any = createStore(
    garmentReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return { store };
}

export default getStore();
