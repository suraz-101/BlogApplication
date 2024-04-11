import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { List } from "../services/blog";

const initialState = {
  blogs: [],
  currentPage: 1,
  total: 0,
  limit: 20,
  loading: false,
  error: "",
};

export const listBlogs = createAsyncThunk(
  "blogs/listBlos",
  async ({ limit, page }) => {
    const res = await List(limit, page);
    return res?.data;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    // setLimit:(state, {payload})
  },
  extraReducers: () => {},
});

export const { setCurrentPage } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
