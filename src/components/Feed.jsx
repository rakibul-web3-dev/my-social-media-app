import Post from "./Post";

function Feed() {
  return (
    <div>
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
