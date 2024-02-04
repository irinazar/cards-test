import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtendedPost, Post } from "../types/types";
import axios from "axios";
import { ALL_POSTS } from "./postsThunk";

// export const searchPosts = createAsyncThunk<ExtendedPost | undefined, string>(
//   "posts/searchPosts",

//   async (searchQuery, thunkAPI) => {
//     try {
//       const value = searchQuery.toLowerCase().trim();

//       const response = await axios.get<Post[]>(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           params: {
//             title: value,
//           },
//         }
//       );
//       if (!response.data) {
//         throw new Error("Нет постов");
//       }

//       const findPost = response.data[0];

//       const localData = localStorage.getItem(ALL_POSTS);
//       if (localData) {
//         const parsedData: ExtendedPost[] = JSON.parse(localData);
//         const onepost = parsedData.find((el) => el.id === findPost.id);
//         const onepostArr = [];
//         onepostArr.push(onepost);
//         return onepostArr;
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue("error error");
//     }
//   }
// );

export const searchPosts = createAsyncThunk<ExtendedPost | undefined, string>(
  "posts/searchPosts",
  async (searchQuery, thunkAPI) => {
    try {
      const value = searchQuery.toLowerCase().trim();

      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            title: value,
          },
        }
      );
      if (!response.data) {
        throw new Error("Нет постов");
      }

      const findPost = response.data[0];

      const localData = localStorage.getItem(ALL_POSTS);
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
