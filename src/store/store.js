import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/product-slice/index";
//create redux store and include slices
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
