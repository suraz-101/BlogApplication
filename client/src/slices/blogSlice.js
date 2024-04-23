import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { List } from "../services/blog";

const initialState = {
  blogs: [],
  page: 1,
  total: 0,
  limit: 20,
  loading: false,
  error: "",
};

export const listBlogs = createAsyncThunk(
  "blogs/listBlogs",
  async ({ limit, page }) => {
    try {
      const response = await List(limit, page);
      console.log(response);
      return response.data; // Assuming the response structure is { data: { total, data } }
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const blogSlice = createSlice({
  name: "blogs",
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
      .addCase(listBlogs.pending, (state) => {
        // console.log(listBlogs);
        state.loading = true;
      })
      .addCase(listBlogs.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.total = action.payload.message.total;
        state.blogs = action.payload.message.data;
      })
      .addCase(listBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setLimit } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
