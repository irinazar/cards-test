import React from "react";
import { DisBtn } from "../SVG/DisBtn";

interface ButtonDisLikeProps {
  postId: number;
  handlerVoiceDisLike: (id: number) => void;
  disBool?: boolean;
}

function ButtonDisLike({
  postId,
  handlerVoiceDisLike,
  disBool,
}: ButtonDisLikeProps): JSX.Element {
  return (
    <div>
      <button onClick={() => handlerVoiceDisLike(postId)}>
        <DisBtn fill={disBool ? "#EB5757" : "#959298"} />
      </button>
    </div>
  );
}
export default React.memo(ButtonDisLike);
