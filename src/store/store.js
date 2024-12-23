import { configureStore,   } from "@reduxjs/toolkit";
import productReducer from "./products/product-slice/index";
import authReducer from "./auth-slice/index";

//create redux store and include slices
export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
});
