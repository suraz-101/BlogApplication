import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { List, create } from "../services/blog";

const initialState = {
  blogs: [],
  blog: {},
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

export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (payload) => {
    try {
      const response = await create(payload);
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
        state.loading = false;
        state.total = action.payload.message.total;
        state.blogs = action.payload.message.data;
      })
      .addCase(listBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload.message.data;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setLimit } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
