import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { conf } from "../../../config/conf";
("../../../config/conf");

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const getProductsData = createAsyncThunk("/products/get", async () => {
  try {
    const response = await axios.get(
      `${conf.backend_api_url}/admin/products/get`,
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
        `${conf.backend_api_url}/admin/products/get`,
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
        `${conf.backend_api_url}/admin/products/add`,
        formData,
      );

      return response?.data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

//get product by id
export const getProductById = createAsyncThunk("/products/id", async (id) => {
  try {
    const response = await axios.get(
      `${conf.backend_api_url}/admin/products/${id}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//Delete product by id
export const deleteProductById = createAsyncThunk(
  "/products/delete",
  async (id) => {
    console.log(`${conf.backend_api_url}/admin/products/${id}`);
    try {
      const response = await axios.delete(
        `${conf.backend_api_url}/admin/products/${id}`,
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
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
        state.productList = [];
      })
      .addCase(getProductById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.product;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = true;
        state.productDetails = [];
      })
      .addCase(deleteProductById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export default productsSlice.reducer;
