import { createSlice } from "@reduxjs/toolkit";
import { ExtendedPost } from "../types/types";
import { getAllPosts } from "./postsThunk";
import { searchPosts } from "./filterThunk";
import { onePost } from "./onePostThunk";

const initialState: { allPosts: ExtendedPost[]; onePost: ExtendedPost } = {
  allPosts: [],
  onePost: {
    like: 0,
    dislike: 0,
    userId: 0,
    id: 0,
    title: "",
    body: "",
    disBool: false,
    likeBool: false,
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      if (action.payload) {
        state.allPosts = action.payload;
      }
    });
    builder.addCase(searchPosts.fulfilled, (state, action) => {
      if (action.payload) {
        state.allPosts = [action.payload];
      }
    });
    builder.addCase(onePost.fulfilled, (state, action) => {
      if (action.payload) {
        state.onePost = action.payload;
      }
    });
  },
});

export const { actions: postsActions } = postsSlice;
