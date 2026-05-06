import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Post from "../components/Post";
import PostInput from "../components/PostInput";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Navbar />

      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
