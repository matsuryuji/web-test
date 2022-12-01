/* eslint-disable no-debugger */
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
    postIds: [],
    postIndex: 0,
    loading: false,
  },
  reducers: {
    savePostIndex(state, action) {
      state.postIndex = action.payload;
    },
    savePostId(state, action) {
      state.postIds.push(action.payload);
    },
    removePostId(state, action) {
      const idPost = action.payload;
      const newPostIds = state.postIds.filter((postId) => postId !== idPost);
      state.postIds = newPostIds;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        if (state.postIds.includes(action.payload[0].postId)) {
          state.postComments.push(action.payload);
        } else {
          console.log(action.payload);
          const idPost = action.payload[0].postId;
          const newPostComments = state.postComments.filter(
            (postId) => postId[state.postIndex].postId !== idPost
          );
          state.postComments = newPostComments;
        }
      })
      .addCase(getPost.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { savePostIndex, savePostId, removePostId } = postSlice.actions;

export default postSlice.reducer;
