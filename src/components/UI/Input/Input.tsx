import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ onChange, value }: InputProps): JSX.Element {
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
