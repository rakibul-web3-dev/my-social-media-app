function Post() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      <h4>User Name</h4>
      <p>This is a post content</p>

      <button>Like</button>
      <button>Comment</button>
    </div>
  );
}

export default Post;
