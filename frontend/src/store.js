import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Correcting the import statement
import { productListReducer } from "./reducers/productReducers"; // Ensure the path is correct

const initialState = {};
const reducer = {
  productList: productListReducer,
};
const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

export default store;
