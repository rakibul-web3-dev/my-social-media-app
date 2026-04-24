import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Post from "../components/Post";
import PostInput from "../components/PostIntput";
import styles from "./Home.module.css";

function Home() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Navbar />

      <div className={styles.homeContainer}>
        <Sidebar />

        <div className={styles.feedContainer}>
          <PostInput setPosts={setPosts} posts={posts} />
          <Feed posts={posts} />
        </div>

        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
