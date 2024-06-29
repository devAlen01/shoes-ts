import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createProduct from "./slices/productSlice";
import basketSlice from "./slices/basketSlice";

const rootReducer = combineReducers({
  product: createProduct,
  basket: basketSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
