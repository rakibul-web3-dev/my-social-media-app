import { useState } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
import styles from "./Feed.module.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      content: text,
      likes: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
  };
  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post,
    );
    setPosts(updatedPosts);
  };

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className={styles.feedContainer}>
      <PostInput addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          likes={post.likes}
          onLike={() => handleLike(post.id)}
          username={user?.name}
        />
      ))}
    </div>
  );
}

export default Feed;
