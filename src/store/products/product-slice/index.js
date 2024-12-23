import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const getProductsData = createAsyncThunk("/products/get", async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/admin/products/get",
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
});

export const getAdminProductsList = createAsyncThunk(
  "/products/list",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/products/get",
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

//add product
export const addProduct = createAsyncThunk(
  "/products/add",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/products/add",
        formData,
      );

      return response?.data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

const productsSlice = createSlice({
  name: "ShoppingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.isLoading = true;
        state.productList = [];
      })
      .addCase(addProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = true;
        state.productDetails = null;
      })
      .addCase(getAdminProductsList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdminProductsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(getAdminProductsList.rejected, (state, action) => {
        state.isLoading = true;
        // state.productList = [];
      });
  },
});

export default productsSlice.reducer;
