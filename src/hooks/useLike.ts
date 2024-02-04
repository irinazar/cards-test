import { useState } from "react";
import { ALL_POSTS } from "../features/postsThunk";
import { ExtendedPost } from "../types/types";

export const useLike = (): {
  voiceLike: boolean;
  voiceDis: boolean;
  handlerVoiceLike: (id: number) => void;
  handlerVoiceDisLike: (id: number) => void;
} => {
  const [voiceLike, setVoiceLike] = useState(false);
  const [voiceDis, setVoiceDis] = useState(false);

  const handlerVoiceLike = (id: number) => {
    const localData = localStorage.getItem(ALL_POSTS);

    const parsedData: ExtendedPost[] = JSON.parse(localData!);

    const updatedData = parsedData.map((post) =>
      post.id === id
        ? {
            ...post,
            like: post.likeBool ? post.like - 1 : post.like + 1,
            likeBool: !post.likeBool,
            dislike: post.disBool ? post.dislike - 1 : post.dislike,
            disBool: false,
          }
        : post
    );
    const post = updatedData.find((el) => el.id === id);
    console.log(post);

    localStorage.setItem(ALL_POSTS, JSON.stringify(updatedData));

    setVoiceLike(!voiceLike);
    setVoiceDis(false);
  };

  const handlerVoiceDisLike = (id: number) => {
    const localData = localStorage.getItem(ALL_POSTS);

    const parsedData: ExtendedPost[] = JSON.parse(localData!);

    const updatedData = parsedData.map((post) =>
      post.id === id
        ? {
            ...post,
            dislike: post.disBool ? post.dislike - 1 : post.dislike + 1,
            disBool: !post.disBool,
            like: post.likeBool ? post.like - 1 : post.like,
            likeBool: false,
          }
        : post
    );

    const post = updatedData.find((el) => el.id === id);
    console.log(post);

    localStorage.setItem(ALL_POSTS, JSON.stringify(updatedData));

    setVoiceDis(!voiceDis);
    setVoiceLike(false);
  };

  return {
    handlerVoiceLike,
    handlerVoiceDisLike,
    voiceLike,
    voiceDis,
  };
};

// export const useLike = (): {
//   voiceLike: boolean;
//   voiceDis: boolean;
//   handlerVoiceLike: (id: number) => void;
//   handlerVoiceDisLike: (id: number) => void;
// } => {
//   const [voiceLike, setVoiceLike] = useState(false);
//   const [voiceDis, setVoiceDis] = useState(false);

//   const handlerVoiceLike = (id: number) => {
//     const localData = localStorage.getItem(ALL_POSTS);

//     const parsedData: ExtendedPost[] = JSON.parse(localData!);

//     const updatedData = parsedData.map((post) => {
//       if (post.id === id) {
//         return {
//           ...post,
//           like: post.likeBool
//             ? post.like - 1
//             : post.like + (post.disBool ? -1 : 1),
//           likeBool: !post.likeBool,
//           disBool: false,
//           clickedTrue: true,
//           clickedFalse: false,
//           dislike: post.dislike + (post.disBool ? 1 : 0),
//         };
//       }
//       return post;
//     });

//     localStorage.setItem(ALL_POSTS, JSON.stringify(updatedData));

//     setVoiceLike(!voiceLike);
//     setVoiceDis(false);
//   };

//   const handlerVoiceDisLike = (id: number) => {
//     const localData = localStorage.getItem(ALL_POSTS);

//     const parsedData: ExtendedPost[] = JSON.parse(localData!);

//     const updatedData = parsedData.map((post) => {
//       if (post.id === id) {
//         return {
//           ...post,
//           dislike: post.disBool
//             ? post.dislike - 1
//             : post.dislike + (post.likeBool ? -1 : 1),
//           disBool: !post.disBool,
//           likeBool: false,
//           clickedTrue: false,
//           clickedFalse: true,
//           like: post.like + (post.likeBool ? 1 : 0),
//         };
//       }
//       return post;
//     });

//     localStorage.setItem(ALL_POSTS, JSON.stringify(updatedData));

//     setVoiceDis(!voiceDis);
//     setVoiceLike(false);
//   };

//   return {
//     handlerVoiceLike,
//     handlerVoiceDisLike,
//     voiceLike,
//     voiceDis,
//   };
// };
