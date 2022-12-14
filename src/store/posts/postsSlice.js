import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
