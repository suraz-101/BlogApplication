import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BlogDetail } from "../pages/admin/BlogDetail";
import {
  create,
  List,
  changeStatus,
  updateBlog,
  remove,
  getById,
} from "../services/blog";

const initialState = {
  blogs: [],
  blog: {},
  page: 1,
  total: 0,
  limit: 20,
  loading: false,
  error: "",
  success: "",
};

export const listBlogs = createAsyncThunk(
  "blogs/listBlogs",
  async ({ limit, page }) => {
    try {
      const response = await List(limit, page);
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

export const getBlog = createAsyncThunk("blogs/getBlog", async (id) => {
  try {
    console.log("response", id);

    const response = await getById(id);
    console.log("response", response.data.data[0]);
    return response?.data.data[0]; // Assuming the response structure is { data: { total, data } }
  } catch (error) {
    throw Error(error.message);
  }
});

export const updateBlogById = createAsyncThunk(
  "blogs/updateBlogById",
  async ({ id, blog }) => {
    try {
      console.log("id", id);
      console.log("blog:", blog);
      const response = await updateBlog({ id, payload: blog });
      return response.data.message;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "blogs/updateStatus",
  async (id) => {
    try {
      const response = await changeStatus(id);
      console.log("status", response.data.message);

      return response.data.message; // Assuming the response structure is { data: { total, data } }
    } catch (error) {
      throw Error(error);
    }
  }
);

export const removeBlog = createAsyncThunk("blogs/removeBlog", async (id) => {
  try {
    const response = await remove(id);
    return response.data; // Assuming the response structure is { data: { total, data } }
  } catch (error) {
    throw Error(error.message);
  }
});

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
      })
      .addCase(getBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBlogById.fulfilled, (state, action) => {
        state.loading = false;
        // state.blog = action.payload;
        state.success = action.payload;
      })
      .addCase(updateBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload.message.data;
        // state.success = action.payload.message;
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload.message;
        console.log(state.blog);
      })
      .addCase(removeBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setLimit } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
