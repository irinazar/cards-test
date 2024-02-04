import { useEffect } from "react";
import styles from "./Post.module.scss";
import ButtonDisLike from "../../components/UI/ButtonDisLike/ButtonDisLike";
import ButtonLike from "../../components/UI/ButtonLike/ButtonLike";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useLike } from "../../hooks/useLike";
import { onePost } from "../../features/onePostThunk";

export default function Post(): JSX.Element {
  const dispatch = useAppDispatch();
  const post = useAppSelector((store) => store.posts.onePost);

  const { voiceLike, handlerVoiceDisLike, handlerVoiceLike, voiceDis } =
    useLike();

  const { postId } = useParams();
  const postisd = Number(postId);

  useEffect(() => {
    dispatch(onePost(Number(postId)));
  }, [dispatch, postId, voiceLike, voiceDis]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link to={"/"} className={styles.back}>
          Вернуться к статьям
        </Link>
        <div className={styles.likeContainer}>
          <div className={styles.like}>
            <ButtonLike
              handlerVoiceLike={handlerVoiceLike}
              postId={postisd}
              likeBool={post.likeBool}
            />
            <div className={styles.count}>{post?.like}</div>
          </div>
          <div className={styles.like}>
            <ButtonDisLike
              disBool={post.disBool}
              handlerVoiceDisLike={handlerVoiceDisLike}
              postId={postisd}
            />
            <div className={styles.count}>{post?.dislike}</div>
          </div>
        </div>
      </div>
      <div className={styles.containerCard}>
        <div className={styles.title}>{post?.title}</div>
        <div className={styles.bottom}>
          <div className={styles.image}>
            <img src="/Image.jpg" alt="img" />
          </div>
          <div className={styles.text}>{post?.body}</div>
        </div>
      </div>
    </div>
  );
}
