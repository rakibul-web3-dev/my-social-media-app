import { useState } from "react";
import styles from "./PostInput.module.css";

function PostInput({ addPost }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;

    addPost(text);
    setText("");
  };

  return (
    <div className={styles.postInput}>
      <input
        className={styles.inputField}
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit} className={styles.postBtn}>
        Post
      </button>
    </div>
  );
}

export default PostInput;
