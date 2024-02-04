import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtendedPost, Post } from "../types/types";
import axios from "axios";
import { ALL_POSTS } from "./postsThunk";

export const onePost = createAsyncThunk<ExtendedPost | undefined, number>(
  "posts/onePost",
  async (number, thunkAPI) => {
    try {
      const response = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${number}`
      );
      if (!response.data) {
        throw new Error("Нет постов");
      }
      const localData = localStorage.getItem(ALL_POSTS);
      const findPost = response.data;

      if (localData) {
        const parsedData: ExtendedPost[] = JSON.parse(localData);
        const onepost = parsedData.find((el) => el.id === findPost.id);
        return onepost;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("error error");
    }
  }
);
