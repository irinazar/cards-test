import React from "react";
import styles from "./ButtonReadMore.module.scss";
import { Link } from "react-router-dom";

interface ButtonReadMoreProps {
  postId: number;
}

function ButtonReadMore({ postId }: ButtonReadMoreProps): JSX.Element {
  return (
    <Link to={`/posts/${postId}`}>
      <button className={styles.btn}>Читать далее</button>
    </Link>
  );
}

export default React.memo(ButtonReadMore);
