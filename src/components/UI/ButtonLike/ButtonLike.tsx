import React from "react";
import { LikeBtn } from "../SVG/LikeBtn";

interface ButtonLikeProps {
  postId: number;
  handlerVoiceLike: (id: number) => void;
  likeBool?: boolean;
}

function ButtonLike({
  postId,
  handlerVoiceLike,
  likeBool,
}: ButtonLikeProps): JSX.Element {

  return (
    <div>
      <button onClick={() => handlerVoiceLike(postId)}>
        <LikeBtn fill={likeBool ? "#219653" : "#959298"} />
      </button>
    </div>
  );
}

export default React.memo(ButtonLike);
