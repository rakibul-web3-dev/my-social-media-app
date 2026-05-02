function Post({ content, likes, onLike, username }) {
  return (
    <div>
      <h4>{username}</h4>
      <p>{content}</p>
      <button onClick={onLike}>Like ({likes})</button>
      <button>Comment</button>
    </div>
  );
}

export default Post;
