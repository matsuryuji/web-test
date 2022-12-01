import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import postReducer from "./post/postSlice";
import usersReducer from "./users/usersSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    users: usersReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
