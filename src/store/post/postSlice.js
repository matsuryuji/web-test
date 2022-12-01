import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("post/getPost", async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    postComments: [],
    loading: false,
  },
  extraReducers(builder) {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postComments = action.payload;
      })
      .addCase(getPost.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
