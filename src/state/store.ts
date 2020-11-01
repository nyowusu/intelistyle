import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import garmentReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

function getStore() {
  const middlewares = [thunk];

  //   const persistedReducer = persistReducer(persistConfig, garmentReducer);

  let store: any = createStore(
    garmentReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  //   let persistor = persistStore(store);

  return { store };
}

export default getStore();
