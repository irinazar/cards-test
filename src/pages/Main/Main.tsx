import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getAllPosts } from "../../features/postsThunk";
import styles from "./Main.module.scss";
import Input from "../../components/UI/Input/Input";
import BigCard from "../../components/BigCard/BigCard";
import Card from "../../components/Card/Card";
import { searchPosts } from "../../features/filterThunk";
import { useFilter } from "../../hooks/useFilter";
import { useLike } from "../../hooks/useLike";

export default function Main(): JSX.Element {
  const dispatch = useAppDispatch();


  const { handleSearchChange, searchQuery } = useFilter();
  const posts = useAppSelector((store) => store.posts.allPosts) || [];

  const { voiceLike, handlerVoiceDisLike, handlerVoiceLike, voiceDis } =
    useLike();

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchPosts(searchQuery));
    } else {
      dispatch(getAllPosts());
    }
  }, [dispatch, searchQuery, voiceLike, voiceDis]);

  console.log(posts);

  return (
    <div className={styles.container}>
      <div className={styles.title}> Блог</div>
      <div className={styles.text}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </div>
      <Input onChange={handleSearchChange} value={searchQuery} />

      {posts && posts.length > 0 && (
        <BigCard
          key={posts[0].id}
          title={posts[0].title}
          body={posts[0].body}
          like={posts[0].like}
          dislike={posts[0].dislike}
          postId={posts[0].id}
          handlerVoiceLike={handlerVoiceLike}
          handlerVoiceDisLike={handlerVoiceDisLike}
          disBool={posts[0].disBool}
          likeBool={posts[0].likeBool}
        />
      )}
      <div className={styles.containerCard}>
        {posts.slice(1).map((post) => (
          <Card
            title={post.title}
            like={post.like}
            dislike={post.dislike}
            postId={post.id}
            handlerVoiceLike={handlerVoiceLike}
            handlerVoiceDisLike={handlerVoiceDisLike}
            disBool={post.disBool}
            likeBool={post.likeBool}
          />
        ))}
      </div>
    </div>
  );
}
