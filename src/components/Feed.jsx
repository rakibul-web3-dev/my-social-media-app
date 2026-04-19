import Post from "./Post";

function Feed() {
  return (
    <div style={{ width: "60%", padding: "10px" }}>
      <div>
        <input placeholder="What's on your mind?" />
        <button>Post</button>
      </div>

      <Post />
      <Post />
    </div>
  );
}

export default Feed;
