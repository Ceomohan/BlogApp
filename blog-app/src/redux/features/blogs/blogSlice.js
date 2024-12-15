import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "./blogApi";

const initialState = {
  blogs: [],
  isError: false,
  isLoading: true,
  error: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getData();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        (state.isLoading = true), (state.blogs = []);
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blogs = action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        (state.isError = true), (state.isLoading = false), (state.blogs = []);
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
