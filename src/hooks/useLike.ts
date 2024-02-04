import { useCallback, useState } from "react";
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

  const handlerVoiceLike = useCallback(
    (id: number) => {
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

      localStorage.setItem(ALL_POSTS, JSON.stringify(updatedData));

      setVoiceLike(!voiceLike);
      setVoiceDis(false);
    },
    [voiceLike]
  );

  const handlerVoiceDisLike = useCallback(
    (id: number) => {
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

      localStorage.setItem(ALL_POSTS, JSON.stringify(updatedData));

      setVoiceDis(!voiceDis);
      setVoiceLike(false);
    },
    [voiceDis]
  );

  return {
    handlerVoiceLike,
    handlerVoiceDisLike,
    voiceLike,
    voiceDis,
  };
};
