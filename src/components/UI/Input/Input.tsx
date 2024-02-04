import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ onChange, value }: InputProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        type="text"
        placeholder="Поиск по названию статьи"
      />
    </div>
  );
}

export default React.memo(Input);
