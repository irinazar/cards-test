import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ExtendedPost, Post } from "../types/types";

export const ALL_POSTS = "ALL_POSTS";

export const getAllPosts = createAsyncThunk<ExtendedPost[], void>(
  "posts/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const localData = localStorage.getItem(ALL_POSTS);

      if (localData) {
        const parsedData: ExtendedPost[] = JSON.parse(localData);
        return parsedData;
      } else {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 50,
            },
          }
        );

        const postsWithLikes = response.data.map((post) => ({
          ...post,
          like: Math.floor(Math.random() * 50),
          dislike: Math.floor(Math.random() * 50),
        }));

        if (!response.data) {
          throw new Error("Нет постов");
        }
        
        localStorage.setItem(ALL_POSTS, JSON.stringify(postsWithLikes));

        return postsWithLikes;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("error error");
    }
  }
);
