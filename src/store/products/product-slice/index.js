import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

const productsSlice = createSlice({
  name: "ShoppingProducts",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default productsSlice.reducer;
