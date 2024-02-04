import React from "react";
import styles from "./BigCard.module.scss";
import ButtonLike from "../UI/ButtonLike/ButtonLike";
import ButtonDisLike from "../UI/ButtonDisLike/ButtonDisLike";
import ButtonReadMore from "../UI/ButtonReadMore/ButtonReadMore";

interface BigCardProps {
  title: string;
  body: string;
  like: number;
  dislike: number;
  postId: number;
  handlerVoiceLike: (id: number) => void;
  handlerVoiceDisLike: (id: number) => void;
  disBool?: boolean;
  likeBool?: boolean;
}

function BigCard({
  title,
  body,
  like,
  dislike,
  postId,
  handlerVoiceLike,
  handlerVoiceDisLike,
  disBool,
  likeBool,
}: BigCardProps): JSX.Element {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/Image.jpg" alt="img" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.containerTitle}>
            <div className={styles.title}>{title}</div>
            <div className={styles.likeContainer}>
              <div className={styles.like}>
                <ButtonLike
                  likeBool={likeBool}
                  postId={postId}
                  handlerVoiceLike={handlerVoiceLike}
                />
                <div className={styles.count}>{like}</div>
              </div>
              <div className={styles.like}>
                <ButtonDisLike
                  disBool={disBool}
                  postId={postId}
                  handlerVoiceDisLike={handlerVoiceDisLike}
                />
                <div className={styles.count}>{dislike}</div>
              </div>
            </div>
          </div>
          <div className={styles.text}>{body}</div>
          <div className={styles.readMore}>
            <ButtonReadMore postId={postId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BigCard);
