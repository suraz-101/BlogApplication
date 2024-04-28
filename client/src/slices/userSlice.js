// userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getById, List } from "../services/users";

const initialState = {
  users: [],
  user: {},
  page: 1,
  total: 0,
  limit: 20,
  loading: false,
  error: "",
};

export const listUsers = createAsyncThunk(
  "users/listUsers",
  async ({ limit, page, email }) => {
    try {
      // console.log(email);
      const response = await List(limit, page, email);
      return response.data; // Assuming the response structure is { data: { total, data } }
    } catch (error) {
      throw Error(error.message);
    }
  }
);
export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async ({ email }) => {
    try {
      console.log("email", email);
      const response = await getById(email);
      return response.data; // Assuming the response structure is { data: { total, data } }
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setLimit: (state, { payload }) => {
      state.page = 1;
      state.limit = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(listUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload.message.total;
        state.users = action.payload.message.data;
      })
      .addCase(listUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.message.data;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setLimit } = userSlice.actions;
export const userReducer = userSlice.reducer;
