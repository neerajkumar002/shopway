import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { conf } from "../../config/conf";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  errorMessage: "",
};

//register user

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    console.log(formData);
    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(
        `${conf.backend_api_url}/auth/register`,
        option,
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
);

// login reducer
export const loginUser = createAsyncThunk("/auth/login", async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${conf.backend_api_url}/auth/login`, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = true;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.errorMessage = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = true;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
