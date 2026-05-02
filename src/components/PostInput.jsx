import { useState } from "react";

function PostInput({ addPost }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;

    addPost(text);
    setText("");
  };

  return (
    <div>
      <input
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default PostInput;
