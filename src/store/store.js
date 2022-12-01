import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import postReducer from "./post/postSlice";
import usersSlice from "./users/usersSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    users: usersSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
