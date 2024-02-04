import React from "react";
import styles from "./Card.module.scss";
import ButtonLike from "../UI/ButtonLike/ButtonLike";
import ButtonDisLike from "../UI/ButtonDisLike/ButtonDisLike";
import ButtonReadMore from "../UI/ButtonReadMore/ButtonReadMore";

interface CardProps {
  title: string;
  like: number;
  dislike: number;
  postId: number;
  handlerVoiceLike: (id: number) => void;
  handlerVoiceDisLike: (id: number) => void;
  disBool?: boolean;
  likeBool?: boolean;
}

function Card({
  title,
  like,
  dislike,
  postId,
  handlerVoiceLike,
  handlerVoiceDisLike,
  disBool,
  likeBool,
}: CardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="public/Image.jpg" alt="img" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.containerTitle}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.readMore}>
          <div className={styles.likeContainer}>
            <div className={styles.like}>
              <ButtonLike
                likeBool={likeBool}
                handlerVoiceLike={handlerVoiceLike}
                postId={postId}
              />
              <div className={styles.count}>{like}</div>
            </div>
            <div className={styles.like}>
              <ButtonDisLike
                disBool={disBool}
                handlerVoiceDisLike={handlerVoiceDisLike}
                postId={postId}
              />
              <div className={styles.count}>{dislike}</div>
            </div>
          </div>
          <ButtonReadMore postId={postId} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
